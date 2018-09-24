import React from 'react';
import arrows from './../public/arrows.css';


const ArrowLeft = (props) => {
  return <img className='arrow left-arrow' src='https://s3-us-west-1.amazonaws.com/indistinctshoutingphotos/left-arrow.gif' onClick={props.previousPhoto}/>
}

export default ArrowLeft;
