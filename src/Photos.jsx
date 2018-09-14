import React from 'react';
import PhotoLeft from './PhotoLeft.jsx';
import PhotoCenter from './PhotoCenter.jsx';
import PhotoRight from './PhotoRight.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='slideshow'>
        <PhotoLeft info={this.props.info} previousPhoto={this.props.previousPhoto} />
        <PhotoRight info={this.props.info} nextPhoto={this.props.nextPhoto} />
        <PhotoCenter info={this.props.info} />
      </div>
    )
  }
}

export default Photos;
