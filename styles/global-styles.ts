import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

  ${reset}
  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Maven Pro', sans-serif;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }

  p, a, h1, h2, h3, h4, h5, h6 {
    transform: skew(-0.1deg);
  }

  a:hover {
    color: #3DB6AE;
    font-weight: bold;
  }

  body {
    margin: 0;
    height: 100%;
    padding-top: 70px;
    font-family: 'nanumsquare';
  }

`;

export default GlobalStyle;
