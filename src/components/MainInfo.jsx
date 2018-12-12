import React from "react";
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import MainBlock from './MainBlock';
import ReviewsBlock from './ReviewsBlock';

MainInfo.propTypes = {
  hotelInfo: PropTypes.object.required
}

function MainInfo({ hotelInfo }) {
  const reviews = hotelInfo['reviews']
  return (
    <div className="row">
      <MainBlock hotelInfo={hotelInfo}/>
      <ReviewsBlock reviews={reviews}/>
    </div>
  )
}

export default MainInfo;