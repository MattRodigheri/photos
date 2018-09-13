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
        <PhotoLeft images={this.props.images} previousPhoto={this.props.previousPhoto} />
        <PhotoCenter images={this.props.images} />
        <PhotoRight images={this.props.images} nextPhoto={this.props.nextPhoto} />
      </div>
    )
  }
}

export default Photos;
