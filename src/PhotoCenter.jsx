import React from 'react';

class PhotoCenter extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showModal(this.props.info.images[1]);
  }

render() {
    return(
      <div className='photo-container center-photo-container'>
        <div className='center-caption'>
          <p>{this.props.info.name} - {this.props.info.location}, United States</p>
        </div>
        <img className='photo center-photo' info={this.props.info} src={`${this.props.info.images[1]}`} onClick={this.handleClick} />
      </div>
    )
  }
}


export default PhotoCenter;
