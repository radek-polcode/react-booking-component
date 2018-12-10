import React from 'react';
import './RoomPrice.css';

export const RoomPrice = () => 
  <div className="col-sm-3">
    <p className="room-price-for-x-nights">Price for 2 nights</p>
    <p className="room-price">608 zł</p>
    <p className="room-price-taxes-and-fees clear-float">+12,33 zł taxes and charges</p>
    <button>See availability</button>
  </div>

export default RoomPrice;
