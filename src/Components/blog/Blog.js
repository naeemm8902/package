import React from 'react';
import Navbar from '../navbar/navbar';

export default function Blog() {
  return (
    <div className="main">
      <Navbar activeLink="blog" /> 
      <h1>Hello, I am Blog</h1>
    </div>
  );
}
