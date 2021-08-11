import React, {useEffect, useState} from 'react';
import {auth} from '../../config/firebase';
import ArticleBlock from "./ArticleBlock";
import firebase from "firebase/app";
import {useHistory} from "react-router-dom";
import {IonIcon} from '@ionic/react';
import {LinkStyled, NavWrapper, PageWrapper, StyledImg, StyledTitle} from "./styled";
import {useAppSelector} from "../../app/hooks";

interface Iposts {
    title: string;
    time: number;
    id: string;
    content: string;

}

class Post {
    constructor(readonly title: string, readonly time: number, readonly id: string, readonly content: string) {
    }

}

const postConverter = {
    toFirestore(post: Post): firebase.firestore.DocumentData {
        return {title: post.title, time: post.time, id: post.id, content: post.content};
    },

    fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot,
        options: firebase.firestore.SnapshotOptions,
    ): Post {
        const data = snapshot.data(options)!;
        return new Post(data.title, data.time, data.id, data.content);
    }
};


const UserCab: React.FC = () => {
    const [posts, setPosts] = useState<Iposts[]>([]);
    const history = useHistory();
    const postFromFirebase = 'posts';
    const isAdmin = useAppSelector(state => state.clientStatus.isAdmin);
    console.log(isAdmin)


        useEffect
    (() => {
// SUIBSCRIBE TO DB
        const db = firebase.firestore();
        const unsub = db.collection(postFromFirebase).withConverter(postConverter)
            .onSnapshot((querySnapshot) => {
                let posts: Iposts[] = [];
                querySnapshot.forEach((doc) => {
                    posts.push(doc.data());
                });
                const sortedPosts = posts.sort((a, b) => {
                    return a.time - b.time
                }).reverse();
                setPosts(sortedPosts)
            });

        return () => {
            unsub()
        }

    }, [])


    const handleClickLogOut = () => {
        auth.signOut()
    }

    const handleAdminRoom = () => {
        history.push('/usercab/postcreator')
    }


    return (
        <PageWrapper>
            <NavWrapper>
                <StyledTitle>LilBlog</StyledTitle>

                <div style={{display: 'flex'}}>

                    {isAdmin
                        ? <LinkStyled onClick={handleAdminRoom} href="#">
                        <StyledImg m={'25px'}
                                   src="https://img2.pngio.com/admin-svg-png-icon-free-download-81837-onlinewebfontscom-admin-png-980_986.png"
                                   alt={'#'}/>
                    </LinkStyled>
                    : null}

                    <LinkStyled onClick={handleClickLogOut} href="#">
                        <StyledImg m={'25px'} src="https://cdn.iconscout.com/icon/free/png-256/logout-36-432839.png"
                                   alt={'#'}/>
                    </LinkStyled>
                </div>
            </NavWrapper>
            {posts.map(item => {
                const {title, content, time, id} = item;
                return (
                    <ArticleBlock key={id} time={time} text={title} secondText={content}/>
                )
            })}
        </PageWrapper>

    )
}

export default UserCab;