import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f3eedd;
    height: 100%
  }
 

  html {
    height: 100%
  }
  h1 {
    text-align: center;
    color: #506c7f;
    font-size: 0.5rem
  }
  
  h2 {text-align: center;
    font-size: 0.5rem

  }

  h3 {
    color: #506c7f;
  margin: 0;
  }

  p {
  color: #506c7f;
  margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

a {
  
  text-decoration: none;

}
image {
  max-width: 100%;
  height: auto;
  margin: 0 300px;
}


`;
