import React from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import RoomInfo from './RoomInfo';
import RoomPrice from './RoomPrice';

RoomDetails.propTypes = {
  roomDetails: PropTypes.object.isRequired,
  roomPrice: PropTypes.object.isRequired
}

function RoomDetails({ roomDetails, roomPrice }) {
  return(
    <div className="row">
      <RoomInfo roomInfo={roomDetails} />
      <RoomPrice roomPrice={roomPrice} />
  </div>
  )
}


export default RoomDetails;