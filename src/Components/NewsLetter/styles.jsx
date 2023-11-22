import styled from "styled-components";
import { theme } from "../../GlobalStyle/Theme";
import emailImg from "./images/mailIcon.svg"

export const SectionNewsletter = styled.section`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.black};
  img {
    position: relative;
    right: 140px;
    bottom: 100px;
  }
`;

export const Subscribe = styled.div`
  padding: 5rem 0 9rem 12rem;
  font-family: ${({ theme }) => theme.fontFamily.default};
  z-index: 4;
`;

export const Description = styled.div`
  margin: 0 0 2rem 0;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.size.l};
  line-height: 82px;
  margin: 2rem 0;
`;

export const TextP = styled.p`
  line-height: 26px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.default};
  margin: 2rem 0;
`;

export const Subtitle = styled(TextP)`
  font-size: ${({ theme }) => theme.size.m};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 17px -1px rgba(0, 0, 0, 0.64);
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  button {
    padding: 1rem;
    width: 65%;
    height: 3.5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0 0.3rem 0.3rem 0;
    cursor: pointer;
  }
  input {
    width: 100%;
    border: none;
    border-radius: 0.3rem;
    background-image: url(${emailImg});
    background-position: calc(10% - 10px) center;
    background-repeat: no-repeat;
    padding-left: 40px;
  }
`;

export const Error = styled.span`
    color: ${({theme}) => theme.colors.red};
    font-size: ${({theme}) => theme.size.s};
    font-weight: 500;
`;
