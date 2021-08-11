import styled from "styled-components";

export const InputStyled = styled.input.attrs(props => ({
    // type: (props: { type: string; }) => props.type ? 'password' : 'text',
    size: props.size || "1em",
    placeholder: 'EMAIL --',
}))`
  border: 2px solid black;
  font-family: Roboto;
  width: 200px;
  margin: ${props => props.margin};
  padding: ${props => props.size};
  margin-bottom: ${props => props.mb || "5px"};

`;

export const PasswordStyled= styled(InputStyled).attrs({
    // type: (props: { type: string; }) => props.type ? props.type : 'text',
    placeholder: 'PASSWORD',
})``;