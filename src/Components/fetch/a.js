import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
// import {Items} from './Items'
// import './item.css'
import { fetchUniversities } from '../api/Api';
export default function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
     fetchUni();
  }, []);

const fetchUni = async () => {
const unis = await fetchUniversities(100);
setData(unis.data);
}

    const itemsNew = (items) => {
      return items.map((element,index) => {
       return(
        <div key={index} className='item_container'>
        <img src={element.image} alt='error images' className='item_image'/>
        <h3 className='item_h3'>{element.name}</h3>
        <p  className='item_p'>{element.country}</p>
    </div>
       )});
    }
    

  return (
    <div className="Data_container">
      <Navbar activeLink="data" /> {/* Pass the activeLink prop */}
       <div className='data_main'>{itemsNew(data)}</div> 
    </div>

    
  );
}
