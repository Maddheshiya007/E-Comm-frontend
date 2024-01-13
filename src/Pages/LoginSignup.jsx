import React, { useState } from "react";
import './CSS/LoginSignup.css'

function LoginSignup() {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    let responseData;
    console.log(process.env.REACT_APP_BASE_URL)
    await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    }
    else (alert(responseData.erorrs))
  }
  const signup = async () => {
    let responseData;

    await fetch(`${process.env.REACT_APP_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data) => responseData = data);
    
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    }
    else { alert(responseData.erorrs) }

  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Username" /> : <></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} id="" placeholder=" Email Address" />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="password" />
          <button onClick={() => {
            state === "Sign Up" ? signup() : login()
          }}>Continue</button>
          {state === "Sign Up" ? <p className="loginsignup-login">Already have an account <span onClick={() => {
            setState("Login")
          }}>Login Here</span></p> :
            <p className="loginsignup-login">
              Create an account <span onClick={() => { setState("Sign Up") }}>Click Here</span>
            </p>}

        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policies</p>
        </div>

      </div>

    </div>
  );
}

export default LoginSignup;