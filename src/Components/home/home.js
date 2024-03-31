import React from 'react';
import Title from './component/title';
import Descirption from './component/descirption';
import './home.css';
import Cards from './component/cards';
import Navbar from '../navbar/navbar';

export default function Home() {
  return (
    <div className="home_container">
      <Navbar activeLink="home" />
      <div className="">
        <Title title="why your Good Health For 2024?" />
        <Descirption Descirption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim ea asperiores quo saepe quasi reiciendis, ratione magni perspiciatis, repudiandae aliquid sit cum quos!" />
        <Cards className="Cards" />
      </div>
    </div>
  );
}
