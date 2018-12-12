import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaLaugh } from "react-icons/fa";

// Separate local imports from dependencies
import './styles/RoomExpectation.css';

// Declare propTypes as static properties as early as possible
RoomExpectation.propTypes = {
  expectation: PropTypes.string.isRequired
}

function RoomExpectation({ expectation }) {
  return(
    <div className="row">
      <div className="col-9">
        <p className="hotel-expectation">
          <IconContext.Provider value={
            { 
              size: "1.5em",
              className: 'hotel-expectation-icon'
            }
          }>
            <FaLaugh />
          </IconContext.Provider>
          {expectation} of guest reviewers had their expectations of this property met or exceeded
        </p>
      </div>
      <div className="col-3"></div>
    </div>
  )
}
  
export default RoomExpectation;
