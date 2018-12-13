import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaLaugh } from "react-icons/fa";

// Declare propTypes as static properties as early as possible
RoomExpectation.propTypes = {
  roomExpectation: PropTypes.string.isRequired
}

function RoomExpectation({ roomExpectation }) {
  return(
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
        {roomExpectation} of guest reviewers had their expectations of this property met or exceeded
      </p>
    </div>
  )
}
  
export default RoomExpectation;
