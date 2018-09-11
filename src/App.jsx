import React from 'react';
import $ from 'jquery';
import Photos from './Photos.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var context = this;
    var tenImages = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }
    $.ajax({
      url: 'http://localhost:3000/photos',
      method: 'GET',
      success: function(data) {
        var count = 0;
        while (count < 10) {
          var randomFoodPic = getRandomInt(0, 49);
          tenImages.push(data[randomFoodPic].url)
          count++;
        }
        context.setState({
          images: tenImages
        })
      },
      error: function(err) {
        console.log(err)
      }
    });
  }


  render() {
    return (
      <div className='slideshow'>
        <Photos images={this.state.images}/>
      </div>
    )
  }
}

export default App;
