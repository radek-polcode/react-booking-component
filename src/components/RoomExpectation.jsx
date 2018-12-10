import React from 'react'
import './RoomExpectation.css'
import { IconContext } from "react-icons";
import { FaLaugh } from "react-icons/fa";

export const RoomExpectation = () =>
  <div className="row">
    <div className="col-sm-9">
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
    <div className="col-sm-3"></div>
  </div>
export default RoomExpectation;
