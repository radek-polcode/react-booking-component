import React from 'react'

import './styles/ReviewsBlock.css';

export const ReviewsBlock = () =>
  <div className="col-3 reviews">
    <div className="review-score-content">
      <div className="review-score-main">
        <div className="review-score-title">
          Wonderful
        </div>
        <div className="review-score-text">
          542 reviews
        </div>
      </div>
      <div className="review-score-badge">
        9.2
      </div>
    </div>
    <div className="review-score-secondary">
      <a href="#">Location 9.5</a>
    </div>
    <div>
      <div className="guest-favorite">Guest Favourite</div>
    </div>
  </div>

export default ReviewsBlock;