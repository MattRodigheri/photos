import React from 'react';

const PhotoCenter = (props) => {
  return (
    <div className='photo-container'>
      <img className='photo center-photo' info={props.info} src={`${props.info.images[1]}`} />
      <p>{`Photo of RestaurantName in Location`}</p>
    </div>
  )
}

export default PhotoCenter;
