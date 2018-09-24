import React from 'react';


const PhotoCenter = (props) => {
  return (
    <div className='photo-container center-photo-container'>
      <img className='photo center-photo' info={props.info} src={props.info.images[1]} onClick={() => props.showModal(props.info.images[1])} />
    </div>
  );
}


export default PhotoCenter;
