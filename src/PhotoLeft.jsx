import React from 'react';
import ArrowLeft from './ArrowLeft.jsx'

const PhotoLeft = (props) => {
  return (
    <div>
      <ArrowLeft />
      <img className='photo' images={props.images} src={`${props.images[0]}`} />
    </div>
  )
}

export default PhotoLeft;
