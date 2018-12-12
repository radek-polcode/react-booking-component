import React from 'react'
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";

// Separate local imports from dependencies
import './styles/RoomInfo.css'

RoomInfo.propTypes = {
  roomInfo: PropTypes.object.isRequired
}

function RoomInfo({ roomInfo }) {
  return (
    <div className="col-8 room-info">
      <p className="room-name">
        {roomInfo.room_name}
        <span className="room-name-icons">
          <IconContext.Provider value={
                { 
                  size: "0.7em",
                  className: 'room-name-icons-user'
                }
              }>
              <FaUser />
          </IconContext.Provider>
          <IconContext.Provider value={
                { 
                  size: "0.7em",
                  className: 'room-name-icons-user'
                }
              }>
              <FaUser />
          </IconContext.Provider>
        </span>
      </p>
      <p className="room-left">{roomInfo.rooms_left} </p>
    </div>
  )
}
  
export default RoomInfo;
