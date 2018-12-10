import React from 'react';
import './MainBlock.css';

export const MainBlock = () =>
  <div className="col-sm-9">
    <a href="https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94">
      <span className="hotel-name">
        Barcelona Central Garden
      </span>
    </a>
    <p>
      <a href="#"
         className="tool-tip location-info"
      > 
        Eixample, Barcelona – Show on map 
      </a>
      <span className="additional-location-info tool-tip"> 
        (650 m from center ) – 
      </span>
      <span className="additional-location-info tool-tip">
        Subway Access
      </span>
    </p>

  </div>

export default MainBlock;