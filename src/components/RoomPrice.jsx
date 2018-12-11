import React from 'react';
import './RoomPrice.css';
import { IconContext } from "react-icons";
import { FaAngleRight } from 'react-icons/fa'

export const RoomPrice = () => 
  <div className="col-4 room-price-content">
    <p className="room-price-for-x-nights">Price for 2 nights</p>
    <p className="room-price">608 zł</p>
    <p className="room-price-taxes-and-fees clear-float">+12,33 zł taxes and charges</p>
    <a href="https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94&srpvid=4dac44148f5002ed&checkin=2019-04-29&checkout=2019-05-01&ucfs=1&srpvid=4dac44148f5002ed&srepoch=1544434858&highlighted_blocks=55438906_88502282_0_0_0&all_sr_blocks=55438906_88502282_0_0_0&room1=A,A&hpos=1&hapos=1&dest_type=city&dest_id=-372490&srfid=f73eac658939c63a0fdab87fbbc793f4947af6baX1&from=searchresults;hptv=do"
       className="btn btn-primary room-button">
       See availability 
      <IconContext.Provider value={
        { 
          className: 'room-button-arrow'
        }
      }>
        <FaAngleRight />
      </IconContext.Provider>
    </a>
  </div>

export default RoomPrice;
