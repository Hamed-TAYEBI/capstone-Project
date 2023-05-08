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
  h1 {text-align: center;
    font-size: 0.5rem

  }
  h2 {text-align: center;
    font-size: 0.5rem

  }
  ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  font-weight: bold;
  color: #506C7F
  
}
a {
  
  text-decoration: none;

}
input {
  display: block;
  margin: auto;
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


.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border: 3px solid navy;
  border-radius:10px;
  margin: 20px;
}

.form__submit-button {
  border: none;
  padding-inline: 20px;
  padding-block: 10px;
  background-color: #F9EBB2;
  color: #F76D57;
  font-size: 0.75rem;
  
}

.form__submit-button:hover {
  background-color: #B4CCB9;
}


  
`;
