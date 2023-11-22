import styled from "styled-components";
import { theme } from "../../GlobalStyle/Theme";


export const NavMenu = styled.nav`
  display: flex;
  margin: 0;
  align-items: flex-end;
  li {
    list-style-type: none;
    padding: 0 16px 8px 16px;
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.black};
    font-weight: 700;
    font-size: ${({theme}) =>
     theme.size.s};
    font-family: ${({theme}) => theme.fontFamily.default};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding: ${({theme}) => theme.size.s};
  position: sticky;
  z-index: 5;
`;
