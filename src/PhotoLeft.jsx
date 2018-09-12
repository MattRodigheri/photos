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
        <img className='photo left-photo' images={this.props.images} src={`${this.props.images[0]}`} />
      </div>
    )
  }
}

export default PhotoLeft;
