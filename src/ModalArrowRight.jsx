import React from 'react';

class ModalArrowRight extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.nextPhoto();
  }


  render() {
    return(
      <img className='arrow modal-right-arrow' src='../right-arrow.gif' onClick={this.handleClick} />
    )
  }
}

export default ModalArrowRight;
