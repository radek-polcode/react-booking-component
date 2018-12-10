import React from 'react'
import MainInfo from './MainInfo';
import RoomDetails from './RoomDetails';
import './ItemContent.css';

export const ItemContent = () => 
  <div className="col-sm-8 col-item-content">
    <MainInfo />
    <RoomDetails />
  </div>

export default ItemContent;