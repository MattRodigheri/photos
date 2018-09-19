import React from 'react';
import arrows from './../public/arrows.css';

class ModalArrowRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className='arrow modal-right-arrow' src='https://s3-us-west-1.amazonaws.com/indistinctshoutingphotos/right-arrow.gif' />
    );
  }
}

export default ModalArrowRight;
