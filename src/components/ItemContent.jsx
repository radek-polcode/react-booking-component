import React, { Component } from 'react'

import MainInfo from './MainInfo';
import RoomExpectation from './RoomExpectation';
import './styles/ItemContent.css';
import RoomDetails from './RoomDetails';

export default class ItemContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    }
  }
  render() {
    return(
      <div className="col-8 col-item-content">
        <MainInfo />
        <RoomExpectation />
        <RoomDetails />
      </div>
    )
  }
}

