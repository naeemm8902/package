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

  const fetchUni = () => {
    fetchUniversities(100)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const itemsNew = (items) => {
    return items.map((element, index) => {
      return (
        <div key={index} className=''>
          <h3 className='item_h3'>{element.country}</h3>
          <p className='item_p'>{element.domains}</p>
          <p className='item_p'>{element.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="Data_container">
      <Navbar activeLink="data" /> {/* Pass the activeLink prop */}
      <div className='data_main'>{itemsNew(data)}</div>
    </div>
  );
}
