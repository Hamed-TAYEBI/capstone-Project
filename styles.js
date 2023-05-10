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
    background-color: #f3eedd;
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
  border-bottom: 1px solid white;
  margin-bottom: 5px;
  font-weight: bold;
  color: #506C7F
  
}
a {
  
  text-decoration: none;

}
image {
  max-width: 100%;
  height: auto;
}
input {
  display: block;
  margin: auto;
  
}

.delete-button {
  
  
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f76d57;
  
  text-decoration: none;
  text-align: center;
  border: solid 2px;
  height: 30px;
  width: 100px;

}
.buttonlink {
  display: flex;
  justify-content: flex-end;
}
  .container {
     border-collapse: collapse;
  display: flex;
  text-align: center;
  justify-content: space-between;
  border: 3px solid #506C7F;
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
   border-collapse: collapse;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  border: 3px solid #506C7F;
  border-radius:10px;
  margin: 20px;
}

.form__submit-button {
  font-weight:bold;
  border: solid #F9EBB2;
  padding-inline: 20px;
  padding-block: 10px;
  background-color: #F9EBB2;
  color: #F76D57;
  
  font-size: 1rem;
  
}

.form__submit-button:hover {
  background-color: #B4CCB9;
}

`;
