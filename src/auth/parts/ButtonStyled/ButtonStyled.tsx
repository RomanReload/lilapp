import styled from "styled-components";

type Props = {
    primary: string,
}

const SignInButton = styled.button<Props>`
  
  background: ${props => props.primary === 'black' ? "Black" : "red"};
  color: ${props => props.primary ? "white" : "black"};
  text-decoration: none;
  font-size: 16px;
  margin: 0.3em;
  width: 200px;
  cursor: pointer;
  align-self: flex-end;
  padding: 0.25em 1em;
  font-family: Roboto;
  border: 2px solid black;
  border-radius: 3px;
`;
export default SignInButton;