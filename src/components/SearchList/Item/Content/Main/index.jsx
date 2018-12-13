import React from "react";
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import Info from './Info';
import Reviews from './Reviews';

MainBlock.propTypes = {
  hotelInfo: PropTypes.object.required
}

function MainBlock({ hotelInfo }) {
  const reviews = hotelInfo['reviews']
  return (
    <div className="row">
      <Info hotelInfo={hotelInfo}/>
      <Reviews reviews={reviews}/>
    </div>
  )
}

export default MainBlock;