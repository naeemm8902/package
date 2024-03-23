import React from 'react';
import './Cards.css';
import cardsData from './data';

export default function Cards() {
  return (
    <div className='cards'>
      {cardsData.map((card, index) => (
        <div key={index} className='card'> {/* Apply 'card' class here */}
          <img src={card.imageSrc} alt='' />
          <p className='p1'>{card.text1}</p>
          <p className='p2'>{card.text2}</p>
        </div>
      ))}
    </div>
  );
}
