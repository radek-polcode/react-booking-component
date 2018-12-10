import React from 'react'
import './ReviewsBlock.css';

export const ReviewsBlock = () =>
  <div className="col-sm-3 reviews">
    <div className="review-score-content">
      <div>
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