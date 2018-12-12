import React from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import RoomInfo from './RoomInfo';
import RoomPrice from './RoomPrice';

RoomDetails.propTypes = {
  roomDetails: PropTypes.object.isRequired
}

function RoomDetails({ roomDetails }) {
  return(
    <div className="row">
      <RoomInfo roomInfo={roomDetails} />
      <RoomPrice />
  </div>
  )
}


export default RoomDetails;