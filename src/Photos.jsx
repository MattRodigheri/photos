import React from 'react';
import PhotoLeft from './PhotoLeft.jsx';
import PhotoCenter from './PhotoCenter.jsx';
import PhotoRight from './PhotoRight.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);

  }

  previousPhoto() {

  }

  nextPhoto() {

  }

  render() {
    return (
      <div>
        <PhotoLeft images={this.props.images} />
        <PhotoCenter images={this.props.images} />
        <PhotoRight images={this.props.images} />        
      </div>
    )
  }
}

export default Photos;
