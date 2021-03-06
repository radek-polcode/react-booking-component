import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import Main from './Main';
import Details from './RoomDetails';
import './index.css';

export default class ItemContent extends Component {
  state = {
    content: this.props.content
  }
  // Initialize state here (ES7)...
  
  // ...or in a constructor method (ES6)
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     content: this.props.content
  //   }
  // }

  // Declare propTypes as static properties as early as possible
  static PropTypes = {
    hotelInfo: PropTypes.object.isRequired 
  }

  render() {
    const { hotelInfo } = this.props
    return(
      <div className="col-8 col-item-content">
        <Main hotelInfo={hotelInfo}/>
        <Details 
          roomInfo={hotelInfo.rooms}
          roomExpectation={hotelInfo.main_info.expectations_exceeded}
          roomPrice={hotelInfo.price} 
        />
      </div>
    )
  }
}

