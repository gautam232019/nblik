import React,{useState} from 'react'
import ReactDom from 'react-dom'
import './Login.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Login() {

  const pass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const [Pass, setPass] = useState(false);
  const [Email, setEmail] = useState(false);

  const handleChangePassword = (e) => {
    const passClass = document.getElementById("name2")
    if(pass.test(e.target.value)){ 
      passClass.classList.remove("invalid")
      passClass.classList.add("valid");
      setPass(true);
    }
    else {
      passClass.classList.remove("valid")
      passClass.classList.add("invalid");
      setPass(false);
     }
  }
  const handleChangeEmail = (e) => {
    const emailClass = document.getElementById("name1");
    if(email.test(e.target.value)){ 
       emailClass.classList.remove("invalid")
       emailClass.classList.add("valid");
       setEmail(true);
    }
    else {
       emailClass.classList.remove("valid")
       emailClass.classList.add("invalid");
       setEmail(false);
     }
  }

  const timer = () => {
    <Link to="/timer">Timer</Link>
  }
    return (
      <div className="main_div">
      <div className="box">
        <h1>Login Form</h1>
        <form action="">
          <div className="input-box">
            <input
              type="text"
              name="Username"
              id="name1"
              className="invalid"
              autocomplete="off"
              onChange={handleChangeEmail}
              required
            />
            <label for="Username">Username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="name2"
              autocomplete="off"
              className="invalid"
              onChange={handleChangePassword}
              required
            />
            <label for="Password">Password</label>
          </div>
          <input type="submit" value="Login" onClick={timer}/>
        </form>
      </div>
    </div>
    )
}
