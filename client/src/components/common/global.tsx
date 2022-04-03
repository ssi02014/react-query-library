import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    max-width: 640px;
  }
  ul, ol {
    list-style: none;
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  input {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #111;
  }
`;

export default GlobalStyle;
