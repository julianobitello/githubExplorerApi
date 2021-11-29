import { createGlobalStyle } from 'styled-components';
import gitLogo from '../img/Github.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; //isso e para que o rem seja igual a 10px em vez de 16px
  }

  body {
    background: #F0F0F5 url(${gitLogo}) no-repeat 65% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  `