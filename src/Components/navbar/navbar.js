import React, { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom'; // Import useHistory from react-router-dom
import Button from './component/button';
import './navbar2.css';

export default function Navbar({
  showloginButton,
  showSigninButton,
  activeLink,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(
    showloginButton !== undefined ? showloginButton : true,
  );
  const [showSignup, setSignup] = useState(
    showSigninButton !== undefined ? showSigninButton : true,
  );
  console.log('showLoginButton prop:', showloginButton);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const loginpage = () => {
    // history.push('/login');
    navigate('/login');
  };
  const signuppage = () => {
    navigate('/signup');
  };
  return (
    <nav>
      <a className="imgg" href="/">
        <img src="./images/logo.svg" alt="sad" />
      </a>
      <ul id="navbar" className={showMenu ? 'active' : ''}>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shop"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/data"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            Data
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fetch"
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            Api
          </NavLink>
        </li>
      </ul>
      <div id="mobile" onClick={handleMenuClick}>
        <i id="bar" className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div>
        {showLogin ? (
          <Button
            text="Login"
            color="white"
            backgroundColor="red"
            hover="black"
            onClick={loginpage}
          />
        ) : null}
        {/* <Button  text="Login" color="white" backgroundColor="red" hover="black" onClick={loginpage} /> */}
        {showSignup ? (
          <Button
            text="SignUp"
            color="white"
            backgroundColor="green"
            hover="black"
            onClick={signuppage}
          />
        ) : null}
      </div>
    </nav>
  );
}
