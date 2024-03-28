import React from 'react';
import Navbar from '../navbar/navbar';

export default function Shop() {
  return (
    <div className="main">
      <Navbar activeLink="shop" /> {/* Pass the activeLink prop */}
      <h1>Hello, I am Shop</h1>
    </div>
  );
}
