import React from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies\
import Expectation from './Expectation';
import Info from './Info';
import Price from './Price';

Details.propTypes = {
  roomDetails: PropTypes.object.isRequired,
  roomExpectation: PropTypes.object.isRequired,
  roomPrice: PropTypes.object.isRequired
}

function Details(
  { 
    roomExpectation,
    roomInfo, 
    roomPrice
  }
)
{
  return(
    <div className="row">
      <Expectation roomExpectation={roomExpectation} />
      <Info roomInfo={roomInfo} />
      <Price roomPrice={roomPrice} />
    </div>
  )
}


export default Details;