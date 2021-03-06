import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Item from '../components/SearchList/Item'
import json_data from './data.js';

class App extends Component {
  state = { hotels: json_data }

  static propTypes ={
    //currently no props
  }

  static defaultProps = {
    //currently no props
  }

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="container">
        {Object.keys(this.state.hotels.data).map((key) =>{
          return (
            <Item hotelInfo={this.state.hotels.data[key]}/>
          )
        })};
      </div>
    );
  }
}

export default App;
