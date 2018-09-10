import React from 'react';

const ArrowLeft = (props) => {
  return <img className='left-arrow' src='../left-arrow.png' onClick={props.previousPhoto} />
}

export default ArrowLeft;
