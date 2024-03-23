import React, { useState } from 'react';
import './navbar2.css';
import Button from './navbar/button';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const loginpage=()=>{
    // history.push('/login');

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
        <Button  text="Login" color="white" backgroundColor="red" hover="black" onClick={loginpage} />
        <Button text="SignUp" color="white" backgroundColor="green" hover="black" />
      </div>
    </nav>
  );
}
