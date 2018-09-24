import React from 'react';
import arrows from './../public/arrows.css';


const ArrowRight = (props) => {
  return <img className='arrow right-arrow' src='https://s3-us-west-1.amazonaws.com/indistinctshoutingphotos/right-arrow.gif' onClick={props.nextPhoto} />
}


export default ArrowRight;
