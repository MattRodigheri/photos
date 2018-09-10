import React from 'react';

const ArrowRight = (props) => {
  return <img className='right-arrow' src='../right-arrow.png' onClick={props.nextPhoto} />
}

export default ArrowRight;
