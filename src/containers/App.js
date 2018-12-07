import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Item from '../components/Item'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Item />
      </div>
    );
  }
}

export default App;
