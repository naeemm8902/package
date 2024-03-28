import React from 'react';
import Navbar from '../navbar/navbar';

export default function About() {
  return (
    <div className="main">
      <Navbar activeLink="about" /> {/* Pass the activeLink prop */}
      <h1>Hello, I am About</h1>
    </div>
  );
}
