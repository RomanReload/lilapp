import {chunk} from "lodash";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ArticleBlock from "../ArticleBlock";
import chunkPosts from "./helper";
import {Iposts} from "../UserCab";
import {IonButton, IonIcon} from "@ionic/react";
import {arrowBack} from 'ionicons/icons';
import {arrowForward} from 'ionicons/icons';

const WrapperNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  //background-color: indianred;
  min-width: 1140px;
`

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px 10px 0px;
  color: #FFFFFF;
`


interface Iprops {
    posts: any[];
}

interface IshowedPosts {
    type: any[];
}


const ChunkedPage: React.FC<Iprops> = ({posts}) => {
    const [nextButton, setNextButton] = useState(false)
    const [prevButton, setPrevButton] = useState(false)
    const [page, setPage] = useState({page: 0, pageCount: 0})
    const [showedPosts, setShowePosts] = useState<any[]>([])

    useEffect(() => {
        if (posts.length !== 0) {
            setShowePosts(chunk(posts, 4))
            const pagesSum = chunk(posts, 4).length
            setPage({...page, pageCount: pagesSum})
            setPrevButton(page.page === 0)
        }
    }, [posts])


    const handleClickNext = () => {
        const pagesSum = showedPosts.length - 1
        setNextButton(pagesSum === page.page + 1)
        setPage({...page, page: page.page + 1})
        setPrevButton(page.page + 1 <= 0)
    }

    const handleClickPrev = () => {
        const pagesSum = showedPosts.length - 1
        setPrevButton(page.page - 1 === 0)
        setPage({...page, page: page.page - 1})
        setNextButton(pagesSum === page.page + 1)
    }


    return (
        <>
            <div>
                {chunkPosts(showedPosts, page.page).map((item: Iposts) => {
                    const {title, content, time, id} = item;
                    return (
                        <ArticleBlock key={id} time={time} text={title} secondText={content}/>
                    )
                })}
            </div>
            <WrapperNavBlock>

                <StyledBlock>
                    <IonButton onClick={handleClickPrev} disabled={prevButton} color="dark">
                        <IonIcon slot="start" icon={arrowBack}/>
                    </IonButton>
                </StyledBlock>

                <StyledBlock>{page.page} of {page.pageCount - 1}</StyledBlock>

                <StyledBlock>
                    <IonButton onClick={handleClickNext} disabled={nextButton} color="dark">
                        <IonIcon slot="end" icon={arrowForward}/>
                    </IonButton>

                </StyledBlock>

            </WrapperNavBlock>
        </>
    )
}
export default ChunkedPage;