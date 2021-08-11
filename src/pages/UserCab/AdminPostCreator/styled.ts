import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vw;
  background-color: black;
`

export const Styledh2 = styled.h2`
  color: white;
  font-family: Roboto;
  text-align: start;

`

export const PostTitle = styled.textarea`
  height: 50px;
  font-family: Roboto;
  color: #fff;
  min-height: 32px;
  max-height: 320px;
  line-height: 21px;
  background-color: black;
  width: 50vw;
  resize: none;
  box-sizing: border-box;
  border: 1px solid rgb(217, 217, 217);
  padding: 4px 11px;
  text-size-adjust: 100%;
`;


export const PostContent = styled.textarea`
  height: 102px;
  font-family: Roboto;
  color: #fff;
  min-height: 32px;
  max-height: 320px;
  line-height: 21px;
  width: 50vw;
  resize: none;
  background-color: black;
  box-sizing: border-box;
  border: 1px solid rgb(217, 217, 217);
  padding: 4px 11px;
  text-size-adjust: 100%;
`;



type CreatorProps = {
    primary: string,
}
export const ButtonWrapper = styled.div`
display: flex;
  justify-content: space-between;
`

export const PostCreatorButton = styled.button<CreatorProps>`
  background: #fff;
  color: black;
  text-decoration: none;
  font-size: 16px;
  margin: 0.3em;
  width: 200px;
  cursor: pointer;
  padding: 0.25em 1em;
  font-family: Roboto;
  border: 2px solid white;
  border-radius: 5px;
  :disabled {
    
    background-color: #cccccc;
    color: #666666;
  }
`;