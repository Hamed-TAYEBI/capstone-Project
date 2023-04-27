import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: fantasy;
  }
  h1 {text-align: center}
  ul {
  list-style: none;
  padding-left: 10px;
  padding-right:10px;
}
li {
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  
}
a {
  text-decoration: none;
  color: navy;
}
  .container {
  display: flex;
  text-align: center;
  justify-content: space-between;
  border: 3px solid navy;
  border-radius:10px;
  margin: 20px;
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
