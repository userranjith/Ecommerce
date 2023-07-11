import React from 'react'
import { useState } from 'react';
import '../CSS/Signup.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [user, setUser] = useState({
    name:"",
    mail:"",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    if (user.username == "" || user.password=="" || user.name=="" || user.mail=="") {
      alert('Please Enter the Signup details')
      return
    }
    localStorage.setItem("login", JSON.stringify(user));
    navigate('/log');


  }
  return (
    <div className='signup'>
      <h1 className='h1_heading_signup'>Sign Up</h1>
      <div className='signupForm'>
        <input type="text" label="name" placeholder='Name' onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input type="text" label="mail" placeholder='xyz@gmail.com' onChange={(e) => setUser({ ...user, mail: e.target.value })}  />
        <input type="text" label='username' placeholder='Username' onChange={(e) => setUser({ ...user, username: e.target.value })} required />
        <input type="password" label='username' placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} required />

        <button className="sub_btn" onClick={onSubmit}>Submit</button>
      </div>

    </div>
  )
}

export default Signup;
