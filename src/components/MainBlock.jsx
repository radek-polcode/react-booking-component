import React from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import './styles/MainBlock.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FaDirections } from "react-icons/fa";

// Declare propTypes here, before the component (taking advantage of JS function hoisting)
// You want these to be as visible as possible
MainBlock.propTypes = {
  hotelInfo: PropTypes.object.isRequired
}

function MainBlock({ hotelInfo }) {
  const mainInfo = hotelInfo['main_info']
  return (
    <div className="col-9">
      <a href={hotelInfo.urls.main_url}>
        <span className="hotel-name">
          {mainInfo.name}
        </span>
      </a>
      <p>
        <IconContext.Provider value={{ size: "0.8em" }}>
          <FaMapMarkerAlt />
        </IconContext.Provider>
        <a href={hotelInfo.urls.map_url}
          className="tool-tip location-info"
        > 
          {mainInfo.location} – Show on map 
        </a>
        <span className="additional-location-info tool-tip">
          <IconContext.Provider value={{ size: "0.8em" }}>
            <FaDirections />
          </IconContext.Provider>
          ({mainInfo.from_center} m from center )
        </span>
        <span className="tool-tip"> – </span>
        {mainInfo.subway_access === "true" &&
          <span className="additional-location-info tool-tip">
            Subway Access
          </span>
        }
      </p>
    </div>
  )
}

  export default MainBlock;