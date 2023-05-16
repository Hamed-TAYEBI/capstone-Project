import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    
    font-family: sans-serif;
    background-color: #f3eedd;
    height: 100%;
    max-width: 400px;
    margin: 0 auto
  }
 

  
  h1 {
    text-align: center;
    color: #506c7f;
    font-size: 1rem
  }
  
  h2 {text-align: center;
    font-size: 1rem

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
img {
  max-width: 100%;
  height: auto;
 
}


`;
