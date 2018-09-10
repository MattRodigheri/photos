import React from 'react';

const PhotoLeft = (props) => {
  return <img images={props.images} src={`${props.images[0]}`} />
}

export default PhotoLeft;
