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
      <div>
        <PhotoLeft info={this.props.info} previousPhoto={this.props.previousPhoto} />
        <PhotoCenter info={this.props.info} />
        <PhotoRight info={this.props.info} nextPhoto={this.props.nextPhoto} />
      </div>
    )
  }
}

export default Photos;
