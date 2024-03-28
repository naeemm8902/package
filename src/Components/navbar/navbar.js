import React, { useState } from 'react';
import './navbar2.css';
import Button from './component/button';
import { useHistory, useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

export default function Navbar({showloginButton,showSigninButton}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(showloginButton !== undefined ? showloginButton : true);
  const [showSignup, setSignup] = useState(showSigninButton !== undefined ? showSigninButton : true);
  console.log('showLoginButton prop:', showloginButton); 

const navigate = useNavigate();
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const loginpage=()=>{
    // history.push('/login');
    navigate('/login')
  }
  const signuppage=()=>{
    navigate('/signup')
  }
  return (
    <nav>
      <a className="imgg"href="/">
        <img src="./images/logo.svg" alt="sad" />
      </a>
      <ul id='navbar' className={showMenu ? 'active' : ''}>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/">Shop</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div id='mobile' onClick={handleMenuClick}>
        <i id='bar' className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div>
   
        {showLogin ?(<Button  text="Login" color="white" backgroundColor="red" hover="black" onClick={loginpage} />): null}
        {/* <Button  text="Login" color="white" backgroundColor="red" hover="black" onClick={loginpage} /> */}
        {showSignup? (<Button text="SignUp" color="white" backgroundColor="green" hover="black" onClick={signuppage}/>):null}
      </div>
    </nav>
  );
}
