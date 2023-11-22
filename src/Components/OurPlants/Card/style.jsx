import styled from "styled-components";
import theme from "../../../GlobalStyle/Theme";

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  width: 380px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 3px 17px -2px rgba(0, 0, 0, 0.66);
  border-radius: 8px;
  align-items: flex-end;
  margin: ${({ theme }) => theme.size.s};
  padding: 3rem 2rem 0 0;
`;

export const Image = styled.div`
  display: flex;
  img {
    width: 190px;
    border-radius: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.size.n};
    line-height: ${({ theme }) => theme.size.n};
  }
  strong {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: ${({ theme }) => theme.size.s};
    line-height: ${({ theme }) => theme.size.l};
  }
  a {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: ${({ theme }) => theme.size.s};
    line-height: ${({ theme }) => theme.size.l};
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: none;
  } img{
    margin-left: 0.6rem;
  }
`;
