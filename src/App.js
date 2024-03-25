import React from 'react';
// import ClassC from './Components/ClassC';
import Home from './Components/home/home';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Login from './Components/login/login';
import Signup from './Components/signup/Signup';

export default function App() {
  return (
    <div className="main">
      <Navbar />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home/>
      {/* <ClassC /> */}
    </div>
  );
}
