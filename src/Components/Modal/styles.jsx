import styled from "styled-components";
import { theme } from "../../GlobalStyle/Theme";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalStyle = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  div {
    margin: 6rem 5rem;
    text-align: center;
    line-height: 1.3rem;
  }
`;

export const Close = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.s};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightRed};
  cursor: pointer;
  margin: 1rem;
`;
