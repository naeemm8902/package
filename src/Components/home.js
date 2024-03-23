import React from 'react'
import Title from './home/title';
import Descirption from './home/descirption';
import './home.css'
import Cards from './home/cards';
export default function Home() {
  return (
    <div className='home'>
    <Title title="Whats your Good Health For 2024?"/>
    <Descirption Descirption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim ea asperiores quo saepe quasi reiciendis, ratione magni perspiciatis, repudiandae aliquid sit cum quos!"/>
    <Cards className="Cards"/>
    </div>
  )
}
