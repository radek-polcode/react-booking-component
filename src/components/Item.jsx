import React, { Component } from 'react'
import './Item.css';
import ItemContent from './ItemContent'
import ItemThumbnail from './ItemThumbnail';

export default class Item extends Component {
  constructor() {
    super();
    // this.addClickedClass = this.addClickedClass;
    this.state = {
      clicked: false
    }
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
        <ItemThumbnail />
        <ItemContent />
      </div>
    )
  }
}
