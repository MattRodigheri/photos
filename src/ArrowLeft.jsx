import React from 'react';

const ArrowLeft = (props) => {
  return (
    <div className='arrow'>
      <img src='../left-arrow.png' onClick={props.previousPhoto} />
    </div>
  );
}

export default ArrowLeft;
