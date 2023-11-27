import styled from "styled-components";
import theme from "../../../GlobalStyle/Theme";

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  button {
    padding: 1rem 2rem;
    margin: ${({ theme }) => theme.size.m};
    font-size: ${({ theme }) => theme.size.m};
    border: 0;
    border-radius: ${({ theme }) => theme.size.s};
    background-color: ${({ theme }) => theme.colors.yellow};
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellowHover};
      transition: all ease-in-out 0.4s;
    }
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.default};
  margin-top: ${({ theme }) => theme.size.l};
  text-align: center;
  font-size: ${({ theme }) => theme.size.m};
`;
