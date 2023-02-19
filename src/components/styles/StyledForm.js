import styled from 'styled-components';

export const StyledForm = styled.div`
  margin-left: 150px;  
  margin-top: 30px;
  width: 40%;
  float: left;

  h2 {
  font-size: 40px;
  margin-bottom: 30px;
}

form > * {
  margin-bottom: 10px;
}

input {
  height: 93px;
}

textarea {
  resize: none;
  height: 189px;
  font-family: 'Open Sans', sans-serif;  
  padding-top: 30px;
}

input, textarea {

  border: 1px solid #dcdcdc;
  width: 557px;
  border-radius: 20px;
  display: block;

  font-weight: 400;
  font-size: 16px;
  color: #2D2D2D;
  padding-left: 30px;
}

input, textarea:focus {
  outline: none;
}

button[type="submit"] {
  display: block;
  width: 200px;
  height: 60px;
  font-size: 16px;
  border-radius: 500px;
  color: #fff;
  background-color: #FAD34F;
  border: none;
}
button[type="submit"]:hover {
  background-color: #fff; 
  color: #FAD34F;
  border: 1px solid #FAD34F;

  transition-duration: 0.4s;
  transition-property: border, background-color, color;
}

button[type="submit"]:focus {
  outline: none;
}

`
