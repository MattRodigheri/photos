import React from 'react';
import ArrowLeft from './ArrowLeft.jsx';

const PhotoLeft = (props) => {
  return (
    <div className='photo-container left-photo-container'>
      <img className='photo left-photo' images={props.images} src={props.info.images[0]} onClick={() => props.showModal(props.info.images[0])} />
      <div className='left-caption'>
        <p>{props.info.name} - {props.info.location}, United States</p>
      </div>
    </div>
  );
}


export default PhotoLeft;
