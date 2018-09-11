import React from 'react';

var previousPhoto = function() {
  console.log('previous')
}

const ArrowLeft = (props) => {
  return <img className='arrow left-arrow' src='../left-arrow.png' onClick={previousPhoto} />
}

export default ArrowLeft;
