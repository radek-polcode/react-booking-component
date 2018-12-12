import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Item from '../components/Item'
import json_data from './data.js';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      hotels: json_data
    }
  }

  render() {
    return (
      <div className="container">
        {Object.keys(this.state.hotels.data).map((key) =>{
          return (
            <Item hotel={this.state.hotels.data[key]}/>
          )
        })};
      </div>
    );
  }
}

export default App;
