import React from 'react';
import ArrowRight from './ArrowRight.jsx';

class PhotoRight extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showModal(this.props.info.images[2]);
  }

render() {
    return(
      <div className='photo-container right-photo-container'>
        <ArrowRight nextPhoto={this.props.nextPhoto}/>
        <div className='right-caption'>
          <p>Photo of Lucky Pig - San Francisco, CA, United States</p>
        </div>
        <img className='photo right-photo' info={this.props.info} src={`${this.props.info.images[2]}`} onClick={this.handleClick} />
      </div>
    )
  }
}


export default PhotoRight;
