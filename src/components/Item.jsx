import React, { Component } from 'react'

import './styles/Item.css';
import ItemContent from './ItemContent'
import ItemThumbnail from './ItemThumbnail';

export default class Item extends Component {
  constructor(props) {
    super(props);
    // this.addClickedClass = this.addClickedClass;
    this.state = {
      clicked: false,
      hotel: this.props.hotel,
    }
    console.log(this.state.hotel.thumbnail)
  }

  handleOnClick = () => {
    const clicked = this.state.clicked;
    this.setState({
      clicked: !clicked
    });
  }

  render() {
    const classNames = 'row item'
    return (
      <div className={this.state.clicked ? classNames + ' clicked' : classNames }
           onClick={this.handleOnClick}>
        <ItemThumbnail thumbnail={this.state.hotel.thumbnail} />
        <ItemContent content={this.state.hotel}/>
      </div>
    )
  }
}
