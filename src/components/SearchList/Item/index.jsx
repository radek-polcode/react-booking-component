import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import './index.css';
import Content from './Content'
import Thumbnail from './Content/Main/Thumbnail';

export default class Item extends Component {
  state = { 
    clicked: false,
  }
  // Initialize state here (ES7) or in a constructor method (ES6)

  // Declare propTypes as static properties as early as possible
  static PropTypes = {
    hotelInfo: PropTypes.object.isRequired 
  }

  // Default props below propTypes
  static defaultProps = {
    hotelInfo: {}
  }

  // Use fat arrow functions for methods to preserve context (this will thus be the component instance)
  handleOnClick = () => {
    this.setState(
      prevState => ({clicked: !prevState.clicked})
    );
  }

  render() {
    const classNames = 'row item'

    // Destructure props for readability
    const { hotelInfo } = this.props
    return (
      <div className={this.state.clicked ? classNames + ' clicked' : classNames }
            // onChange={() => { this.setState({clicked: !this.state.clicked }) }}
            // Avoid creating new closures in the render method- use methods like below
           onClick={this.handleOnClick}>
        <Thumbnail thumbnail={hotelInfo.thumbnail} />
        <Content hotelInfo={hotelInfo}/>
      </div>
    )
  }
}
