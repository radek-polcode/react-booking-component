import React from 'react'
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import './Reviews.css';

ItemReviewsBlock.propTypes = {
  reviews: PropTypes.object.isRequired
}

function ItemReviewsBlock({ reviews }) {
  return(
    <div className="col-3 reviews">
      <div className="review-score-content">
        <div className="review-score-main">
          <div className="review-score-title">
            {reviews.title}
          </div>
          <div className="review-score-text">
            {reviews.number_of_reviews} reviews
          </div>
        </div>
        <div className="review-score-badge">
          {reviews.overall_score}
        </div>
      </div>
      <div className="review-score-secondary">
        <a href="#">Location {reviews.location_score}</a>
      </div>
      {reviews.guest_favourite === "true" &&
        <div>
          <div className="guest-favorite">Guest Favourite</div>
        </div>
      }      
    </div>
  )
}
  
export default ItemReviewsBlock;