import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaAngleRight } from 'react-icons/fa'

// Separate local imports from dependencies
import './styles/RoomPrice.css';

RoomPrice.propTypes = {
  roomPrice: PropTypes.object.isRequired
}

function RoomPrice({ roomPrice }) {
  return(
    <div className="col-4 room-price-content">
      <p className="room-price-for-x-nights">Price for {roomPrice.number_of_nights} {roomPrice.currency} nights</p>
      <p className="room-price">{roomPrice.price} zł</p>
      <p className="room-price-taxes-and-fees clear-float">+{roomPrice.taxes_and_charges} {roomPrice.currency} taxes and charges</p>
      <a href="#"
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
  )
} 
  

export default RoomPrice;
