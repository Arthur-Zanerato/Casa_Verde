import { createGlobalStyle } from "styled-components";
import blob from "../images/blob.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${blob});
    background-repeat: no-repeat;
    background-position: top right;
  }
`;

export default GlobalStyle;
