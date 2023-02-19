import React from 'react';
import { useState } from 'react';
import { StyledForm } from "./styles/StyledForm";

export default function Form() {

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://test-nestjs-api.onrender.com/api/post', { 
      method: 'POST', 
      mode: 'cors',
	  headers: {
    	'Content-Type': 'application/json;charset=utf-8'
  	  },
      body: JSON.stringify(userForm)});
  
      //get response from the server
      const string = await response.text();
      const json = string === "" ? {} : JSON.parse(string);
      console.log(json);
      setUserForm({
        name: "",
        email: "",
        message: ""
      });
    }

    function handleChange (event) {
      const {name, value} = event.target;

      setUserForm(oldData => {
        return {...oldData, [name]: value}
      });
    }
  
  return (
    <StyledForm>
      <h2>Reach out to us!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleChange} value={userForm.name} placeholder='Your name*'/>
        <input type="email" name="email" onChange={handleChange} value={userForm.email} placeholder='Your e-mail*'/>
        <textarea name="message" onChange={handleChange} value={userForm.message} placeholder='Your message*'/>
        <button type="submit">Submit</button>
        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </form>
    </StyledForm>
  )
};
