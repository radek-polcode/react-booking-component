import React from 'react'

import './styles/ItemThumbnail.css';

export const ItemThumbnail = ({thumbnail}) =>
  <div className="col-4 col-item-thumbnail">
    <img className='thumbnail'
        src={thumbnail}
        alt="thumbnail" />
  </div>

export default ItemThumbnail;