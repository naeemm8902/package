import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import {Items} from './Items'
import './item.css'
// import items from './Items'
export default function Data() {

    const itemsNew = Items.map((element,index) => {
       return(
        <div key={index} className='item_container'>
        <img src={element.image} alt='error images' className='item_image'/>
        <h3 className='item_h3'>{element.data1}</h3>
        <p  className='item_p'>{element.data2}</p>
    </div>
       )});
    
  return (
    <div className="Data_container">
      <Navbar activeLink="data" /> {/* Pass the activeLink prop */}
       <div className='data_main'>{itemsNew}</div> 
    </div>

    
  );
}
