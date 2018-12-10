import React from 'react'
import './RoomInfo.css'
import { IconContext } from "react-icons";
import { FaLaugh } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const RoomInfo = () =>
  <div className="col-sm-9">
    <div>
      <p className="hotel-expectation">
        <IconContext.Provider value={
          { 
            size: "1.5em",
            className: 'hotel-expectation-icon'
          }
        }>
          <FaLaugh />
        </IconContext.Provider>
        95% of guest reviewers had their expectations of this property met or exceeded
      </p>
    </div>
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
