import React from 'react';

import './styles/MainBlock.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FaDirections } from "react-icons/fa";

export const MainBlock = () =>
  <div className="col-9">
    <a href="https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94">
      <span className="hotel-name">
        Barcelona Central Garden
      </span>
    </a>
    <p>
      <IconContext.Provider value={{ size: "0.8em" }}>
        <FaMapMarkerAlt />
      </IconContext.Provider>
      <a href="https://www.booking.com/hotel/es/barcelona-central-garden-hostel.html?aid=376363&sid=b25d83dd6413a7363d53abd7385acd94&srpvid=0dc7373df6e000ef&checkin=2019-04-29&checkout=2019-05-01&ucfs=1&srpvid=0dc7373df6e000ef&srepoch=1544428283&highlighted_blocks=55438906_88502282_0_0_0&all_sr_blocks=55438906_88502282_0_0_0&room1=A,A&hpos=1&hapos=1&dest_type=city&dest_id=-372490&srfid=57179b06ca2743ec3b9dff0897fe8094ff62afe9X1&from=searchresults;map=1&msd=1#hotelTmpl"
        className="tool-tip location-info"
      > 
        Eixample, Barcelona – Show on map 
      </a>
      <span className="additional-location-info tool-tip">
        <IconContext.Provider value={{ size: "0.8em" }}>
          <FaDirections />
        </IconContext.Provider>
        (650 m from center )
      </span>
      <span className="tool-tip"> – </span>
      <span className="additional-location-info tool-tip">
        Subway Access
      </span>
    </p>
  </div>

  export default MainBlock;