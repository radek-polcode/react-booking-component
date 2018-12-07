import React, { Component } from 'react'
import './Item.css';
import ItemContent from './ItemContent'
import ItemThumbnail from './ItemThumbnail';

export const Item = () =>
  <div className='row item'>
    <ItemThumbnail />
    <ItemContent />
  </div>

export default Item;
