import React from 'react';
// import ClassC from './Components/ClassC';
import Home from './Components/home';
import './App.css'
import Navbar from './Components/navbar';

export default function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Home/>
      {/* <ClassC /> */}
    </div>
  );
}
