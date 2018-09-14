import React from 'react';
import ArrowLeft from './ArrowLeft.jsx'

class PhotoLeft extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='photo-container left-photo-container'>
        <ArrowLeft previousPhoto={this.props.previousPhoto}/>
        <div className='left-caption'>
          <p>Photo of Lucky Pig - San Francisco, CA, United States</p>
        </div>
        <img className='photo left-photo' images={this.props.images} src={`${this.props.info.images[0]}`} />
      </div>
    )
  }
}

export default PhotoLeft;
