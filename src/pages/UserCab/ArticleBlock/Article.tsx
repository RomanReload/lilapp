import React from "react";
import styled from "styled-components";


const ArticleWrapper = styled.main.attrs(props => {

})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //background-color: indianred;
  width: 1108px;
  border-bottom:1px solid #C2C3C7;
`;

const TextContent = styled.p.attrs(props => {

})`
  font-family: Roboto,serif;
  font-style: normal;
  margin: ${(props) => props.m ? props.m : '0px 0px 0px 0px'};
  color: ${props => props.textColor ? props.textColor : 'dark'};
  font-size: ${props => props.fontS ? props.fontS : '14px'};
  font-weight: ${props => props.fontW ? props.fontW : '500'};
  text-align: start;

  width: 1108px;
`;


interface Itext {
    time: number,
    text: string,
    secondText: string,
}

const ArticleBlock: React.FC<Itext> = ({time, text, secondText}) => {
const currentTime = new Date(time).toTimeString().split(" ")[0];
    return (
        <ArticleWrapper>
            <TextContent
                fontS={'14px'}
                m={'16px 0px 20px 0px'}
                textColor={'#929399'}
                fontW={'700'}
            >{currentTime}</TextContent>

            <TextContent
                fontS={'32px'}
                m={'0px 0px 20px 0px'}
                textColor={'#FFFFFF'}
                fontW={'400'}
            > {text}</TextContent>
            <TextContent
                fontS={'16px'}
                m={'20px 0px 20px 0px'}
                textColor={'#C2C3C7'}
                fontW={'400'}
            >{secondText}</TextContent>
        </ArticleWrapper>
    )
}
export default ArticleBlock;