import React from "react";
import MainBlock from './MainBlock';
import ReviewsBlock from './ReviewsBlock';

export const MainInfo = () =>
  <div className="row">
    <MainBlock />
    <ReviewsBlock />
  </div>

export default MainInfo;