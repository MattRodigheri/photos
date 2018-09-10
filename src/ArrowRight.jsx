import React from 'react';

const ArrowRight = (props) => {
  return (
    <div className='arrow'>
      <img src='../right-arrow.png' onClick={props.nextPhoto} />
    </div>
  );
}

export default ArrowRight;
