import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f3eedd;
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
}




.buttonlink {
  display: flex;
  justify-content: flex-end;
}


.box {
  width: calc(33.33% - 10px);
  margin: 0 5px;
  list-style: none;
  padding: 10px;
  border: 1px solid black;
  background-color: lightgray;
  box-sizing: border-box;
}

`;
