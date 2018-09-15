import React from 'react';
import PhotoLeft from './PhotoLeft.jsx';
import PhotoCenter from './PhotoCenter.jsx';
import PhotoRight from './PhotoRight.jsx';
import Modal from './Modal.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      image: ''
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(image) {
    this.setState({
      show: true,
      image: image
    });
  };

  hideModal() {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className='slideshow'>

        <Modal show={this.state.show} handleClose={this.hideModal} info={this.props.info} image={this.state.image} previousPhoto={this.previousPhoto}></Modal>

        <PhotoLeft info={this.props.info} previousPhoto={this.props.previousPhoto} showModal={this.showModal} />
        <PhotoRight info={this.props.info} nextPhoto={this.props.nextPhoto} showModal={this.showModal} />
        <PhotoCenter info={this.props.info} showModal={this.showModal} />
      </div>
    )
  }
}

export default Photos;
