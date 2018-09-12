import React from 'react';

class ArrowLeft extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.previousPhoto();
  }


  render() {
    return(
      <img className='arrow left-arrow' src='../left-arrow.png' onClick={this.handleClick}/>
    )
  }
}

export default ArrowLeft;
