import React from 'react'

export const ItemThumbnail = () =>
  <div className="col-sm-4">
    <img className='thumbnail'
        src={require("../images/thumb.jpg")} 
        alt="thumbnail" />
  </div>

export default ItemThumbnail;