import React from 'react';

const PhotoCenter = (props) => {
  return (
    <div className='photo-container'>
      <img className='photo center-photo' images={props.images} src={`${props.images[1]}`} />
    </div>
  )
}

export default PhotoCenter;
