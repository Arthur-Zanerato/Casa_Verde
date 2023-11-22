import styled from "styled-components";
import theme from "../../GlobalStyle/Theme";

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.m};
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 4.5rem;
  strong {
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-size: ${({ theme }) => theme.size.l};
  }
`;

export const Section = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.m};
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  line-height: 4.5rem;
    margin-top: 4rem;
`;
