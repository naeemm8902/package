import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value.length < 3) {
      setEmailError('Email must contain at least 3 characters.');
      console.log('error: email length');
    } else if (!value.includes('@')) {
      setEmailError('Email must contain "@" symbol.');
      console.log('error: @ symbol');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="overlay">
      <form>
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
              onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default Login;
