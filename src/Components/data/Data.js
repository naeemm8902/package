import React from 'react';
import Navbar from '../navbar/navbar';

export default function Data() {
  return (
    <div className="main">
      <Navbar activeLink="data" /> {/* Pass the activeLink prop */}
      <h1>Hello, I am Data</h1>

     
    </div>

    
  );
}
