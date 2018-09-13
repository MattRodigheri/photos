import React from 'react';
import ArrowRight from './ArrowRight.jsx';

class PhotoRight extends React.Component {
  constructor(props) {
    super(props)

  }

render() {
    return(
      <div>
        <ArrowRight nextPhoto={this.props.nextPhoto}/>
        <img className='photo right-photo' images={this.props.images} src={`${this.props.images[2]}`} />
      </div>
    )
  }
}


export default PhotoRight;