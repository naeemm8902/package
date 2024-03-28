import React from 'react';
import Navbar from '../navbar/navbar';

export default function Contact() {
  return (
    <div className="main">
      <Navbar activeLink="contact" /> {/* Pass the activeLink prop */}
      <h1>Hello, I am Contact</h1>

     
    </div>

    
  );
}
