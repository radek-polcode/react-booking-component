import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Item from '../components/Item'
import json_data from './data.js';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      json_data: JSON.parse(json_data)
    }
  }

  render() {
    return (
      <div className="container">
        <Item />
      </div>
    );
  }
}

export default App;
