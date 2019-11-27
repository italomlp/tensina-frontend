import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
