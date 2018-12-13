import React from "react";
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import ItemMainInfo from './ItemMainInfo';
import ItemReviewsBlock from './ItemReviewsBlock';

ItemMainBlock.propTypes = {
  hotelInfo: PropTypes.object.required
}

function ItemMainBlock({ hotelInfo }) {
  const reviews = hotelInfo['reviews']
  return (
    <div className="row">
      <ItemMainInfo hotelInfo={hotelInfo}/>
      <ItemReviewsBlock reviews={reviews}/>
    </div>
  )
}

export default ItemMainBlock;