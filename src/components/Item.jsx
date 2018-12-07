import React, { Component } from 'react'
import MainInfo from '../components/MainInfo'

export default class Item extends Component {
  render() {
    return (
      <div className='outerDiv'>
        <div className='item'>
          <MainInfo />
        </div>
      </div>
    )
  }
}
