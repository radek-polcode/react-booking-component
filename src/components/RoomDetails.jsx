import React from 'react';
import RoomExpectation from './RoomExpectation';
import RoomInfo from './RoomInfo';
import RoomPrice from './RoomPrice';

export const RoomDetails = () => 
  <div className="row">
    <RoomInfo />
    <RoomPrice />
  </div>

export default RoomDetails;