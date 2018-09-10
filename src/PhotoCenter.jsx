import React from 'react';

const PhotoCenter = (props) => {
  return <img images={props.images} src={`${props.images[1]}`} />
}

export default PhotoCenter;
