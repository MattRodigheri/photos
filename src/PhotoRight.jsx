import React from 'react';
import ArrowRight from './ArrowRight.jsx';


const PhotoRight = (props) => {
  return (
    <div className='photo-container right-photo-container'>
      <img className='photo right-photo' info={props.info} src={props.info.images[2]} onClick={() => props.showModal(props.info.images[2])} />
      <div className='right-caption'>
        <p>{props.info.name} - {props.info.location}, United States</p>
      </div>
    </div>
  );
}



export default PhotoRight;
