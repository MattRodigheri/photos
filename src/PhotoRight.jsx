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
        <img className='photo right-photo' info={this.props.info} src={`${this.props.info.images[2]}`} />
        <p>{`Photo of RestaurantName in Location`}</p>
      </div>
    )
  }
}


export default PhotoRight;
