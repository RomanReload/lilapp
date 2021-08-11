import React, {useEffect, useState} from "react";
import firebase from "firebase";
import {nanoid} from "@reduxjs/toolkit";
import {useHistory} from "react-router-dom";
import {LinkStyled, StyledImg} from "../styled";
import {ButtonWrapper, PostContent, PostCreatorButton, PostTitle, StyledDiv, Styledh2 } from "./styled";
import Snipper1 from "../../../other/spinner1";
import { IonButton } from "@ionic/react";


const AdminPostCreator = () => {
    const history = useHistory();
    const [contentArea, setContentArea] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [buttonDisables , setButtonDisabled] = useState(true);
    const [err , setErr] = useState('');
    const [loading , setLoading ] = useState(false);

    useEffect(()=>{
        setButtonDisabled(true);
        if(contentArea.length > 0 && postTitle.length > 0){
            setButtonDisabled(false);
        }
    },[contentArea,postTitle])


    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        setLoading(true)
        if(contentArea.length > 0 && postTitle.length > 0){
        const db = firebase.firestore();
        await db.collection('posts').add({
            title: postTitle,
            content: contentArea,
            time: Date.now(),
            id: nanoid(),
        }).then(r=>{
            setLoading(false)
            setContentArea('')
            setPostTitle('')
            history.push('/usercab')
        }).catch(err=>{
            setErr(err)
        })

        }
        else return;
    };


    const handleBack = () =>{
        history.push('/usercab')
    }

    return (
        <>
        {loading ? <Snipper1/>
                :
    <StyledDiv>
        <form action="#" onSubmit={handleSubmit}>
            <Styledh2>Title</Styledh2>
            <PostTitle onChange={(e) => setPostTitle(e.target.value)} value={postTitle}>
            </PostTitle>
            <Styledh2>Main text</Styledh2>
            <PostContent onChange={(e) => setContentArea(e.target.value)} value={contentArea}>
                It was a dark and stormy night...
            </PostContent>
            <ButtonWrapper>
                <LinkStyled onClick={handleBack} href="#">
                    <StyledImg m={'25px'} src="https://cdn.iconscout.com/icon/free/png-256/logout-36-432839.png"
                               alt={'#'}/>
                </LinkStyled>

                <IonButton type={'submit'} disabled={buttonDisables} color="dark">Dark</IonButton>

                {/*<PostCreatorButton  primary={'true'}>*/}
                {/*    Create post*/}
                {/*</PostCreatorButton>*/}
            </ButtonWrapper>
        </form>
        {err.length > 0 ? err : null}
    </StyledDiv>
}
        </>
    )
}

export default AdminPostCreator;