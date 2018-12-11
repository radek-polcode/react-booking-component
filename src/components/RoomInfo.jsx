import React from 'react'
import './RoomInfo.css'
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";

export const RoomInfo = () =>
  <div className="col-8 room-info">
    <p className="room-name">
      Bunk Bed Room and Shared Bathroom
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
    <p className="room-left">Only 2 room left </p>
  </div>
export default RoomInfo;
