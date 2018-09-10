import React from 'react';


var nextPhoto = function() {
  console.log('next');
}

const ArrowRight = (props) => {
  return <img className='arrow right-arrow' src='../right-arrow.png' onClick={nextPhoto} />
}

export default ArrowRight;
