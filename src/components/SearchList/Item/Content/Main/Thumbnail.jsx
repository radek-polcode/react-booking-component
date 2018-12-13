import React from 'react'
import PropTypes from 'prop-types';

// Separate local imports from dependencies
import './Thumbnail.css';

// Declare propTypes here, before the component (taking advantage of JS function hoisting)
// You want these to be as visible as possible
ItemThumbnail.propTypes = {
  thumbnail: PropTypes.string
}

// Avoid the following ES6 syntax:
// export const ItemThumbnail = ({thumbnail}) => {}
// Looks very modern, but the function here is actually unnamed.

function ItemThumbnail({ thumbnail }) {
  return (
    <div className="col-4 col-item-thumbnail">
      <img className='thumbnail'
          src={thumbnail}
          alt="thumbnail" />
    </div>
  )
}

export default ItemThumbnail;