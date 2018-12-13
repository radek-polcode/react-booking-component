import React from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies\
import RoomExpectation from './RoomExpectation';
import RoomInfo from './RoomInfo';
import RoomPrice from './RoomPrice';

RoomDetails.propTypes = {
  roomDetails: PropTypes.object.isRequired,
  roomExpectation: PropTypes.object.isRequired,
  roomPrice: PropTypes.object.isRequired
}

function RoomDetails(
  { 
    roomExpectation,
    roomInfo, 
    roomPrice
  })
{
  return(
    <div className="row">
      <RoomExpectation roomExpectation={roomExpectation} />
      <RoomInfo roomInfo={roomInfo} />
      <RoomPrice roomPrice={roomPrice} />
    </div>
  )
}


export default RoomDetails;