import React from 'react';

const PhotoCenter = (props) => {
  return <img className='photo' images={props.images} src={`${props.images[1]}`} />
}

export default PhotoCenter;
