import React from 'react'
import './ItemThumbnail.css';

export const ItemThumbnail = () =>
  <div className="col-4 col-item-thumbnail">
    <img className='thumbnail'
        src={require("../images/thumb.jpg")} 
        alt="thumbnail" />
  </div>

export default ItemThumbnail;