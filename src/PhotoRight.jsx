import React from 'react';

const PhotoRight = (props) => {
  return <img images={props.images} src={`${props.images[2]}`} />
}

export default PhotoRight;
