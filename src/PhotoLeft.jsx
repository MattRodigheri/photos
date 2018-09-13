import React from 'react';
import ArrowLeft from './ArrowLeft.jsx'

class PhotoLeft extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <ArrowLeft previousPhoto={this.props.previousPhoto}/>
        <img className='photo left-photo' images={this.props.images} src={`${this.props.info.images[0]}`} />
        <p>{`Photo of RestaurantName in Location`}</p>
      </div>
    )
  }
}

export default PhotoLeft;
