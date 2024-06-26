import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling
import Navbar from '../navbar/navbar';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value.length < 3) {
      setEmailError('Email must contain at least 3 characters and @');
      console.log('error: email length');
    } else if (!value.includes('@')) {
      setEmailError('Email must contain "@" symbol.');
      console.log('error: @ symbol');
    } else {
      setEmailError('');
    }
  };
  const handlePassword=(e)=>{
    const {value}=e.target;
    setPassword(value);
    if (value.length<8) {
      setPasswordError("Password must be atleast 8 characters");
    }
    else{
      setPasswordError("");
    }
  }
  const handleform=(e)=>{
    e.preventDefault();
    const Dataorm={
      email,
      password
    }
    console.log("Dataform",Dataorm)
  }

  return (
    <div className="main">
      <Navbar showloginButton={false} /> {/* Pass the prop showloginButton={false} */}
    <div className="overlay">
      <form onSubmit={handleform}>
        <div className="con">
          <header className="head-form">
            <h2>Log In</h2>
            <p>Login here using your username and password</p>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <i className="fa fa-user-circle"></i>
            </span>
            <input
              className="form-input"
              id="txt-input"
              type="text"
              placeholder="@UserName"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            <div className="error-container">
              {emailError && <span className="error-msg">{emailError}</span>}
            </div>
            <span className="input-item">
              <i className="fa fa-key"></i>
            </span>
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id="pwd"
              name="password"
              value={password}
              onChange={handlePassword}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>
              <i
                className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                aria-hidden="true"
                type="button"
                id="eye"
                onClick={togglePasswordVisibility}
              ></i>
            </span>
            <div className="error-container">
                {passwordError && <span className="error-msg">{passwordError}</span>}
            </div>
            <br />
            <button type="submit" className="btn log-in">
              Log In
            </button>
          </div>
          <div className="other">
            <button className="btn submits frgt-pass">Forgot Password</button>
            <button className="btn submits sign-up">
              Sign Up
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
