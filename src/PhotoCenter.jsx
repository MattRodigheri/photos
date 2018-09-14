import React from 'react';

const PhotoCenter = (props) => {
  return (
    <div className='photo-container center-photo-container'>
      <div className='center-caption'>
        <p>Photo of Lucky Pig - San Francisco, CA, United States</p>
      </div>
      <img className='photo center-photo' info={props.info} src={`${props.info.images[1]}`} />
    </div>
  )
}

export default PhotoCenter;
