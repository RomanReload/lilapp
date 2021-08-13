import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  min-width: 80%;
  min-height: 100vh;
`;
export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 1140px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 106px;
`;

export const StyledTitle = styled.h2`
  color: white;
  flex: 1;
  text-align: start;
  
`
type Isvg = {
    m: string;
}
export const StyledImg = styled.img.attrs(props => ({}))<Isvg>`
  filter: invert(1);
  width: ${props => props.m ? props.m : '25px'};
  height: 25px;
  margin: 5px;
`;

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;
