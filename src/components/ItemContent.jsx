import React from 'react'
import MainInfo from './MainInfo';
import RoomExpectation from './RoomExpectation';
import RoomInfo from './RoomInfo';
import './ItemContent.css';
import RoomDetails from './RoomDetails';

export const ItemContent = () => 
  <div className="col-sm-8 col-item-content">
    <MainInfo />
    <RoomExpectation />
    <RoomDetails />
  </div>

export default ItemContent;