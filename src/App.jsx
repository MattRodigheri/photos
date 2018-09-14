import React from 'react';
import $ from 'jquery';
import Photos from './Photos.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [],
      photographers: [],
      friends: [],
      reviews: []
    }

    this.getData = this.getData.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
    this.timedScroll = window.setInterval(this.nextPhoto, 8000);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var context = this;
    var tenImages = [];
    var tenPhotographers = [];
    var tenFriends = [];
    var tenReviews = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }
    $.ajax({
      url: '/photos/',
      method: 'GET',
      success: function(data) {
        var count = 0;
        while (count < 10) {
          var randomFoodPic = getRandomInt(0, 49);
          tenImages.push(data[randomFoodPic].url);
          tenPhotographers.push(data[randomFoodPic].photographer);
          tenFriends.push(data[randomFoodPic].friends);
          tenReviews.push(data[randomFoodPic].reviews);
          count++;
        }
        context.setState({
          images: tenImages,
          photographers: tenPhotographers,
          friends: tenFriends,
          reviews: tenReviews
        })
      },
      error: function(err) {
        console.log(err)
      }
    });
  }

  nextPhoto() {
    var newArr = this.state.images;
    var hold = newArr.shift();
    newArr.push(hold);
    this.setState({
      images: newArr
    })
  }

  previousPhoto() {
    var newArr = this.state.images;
    var hold = newArr.pop();
    newArr.unshift(hold);
    this.setState({
      images: newArr
    })
  }


  render() {
    return (
      <div>
        <Photos info={this.state} nextPhoto={this.nextPhoto} previousPhoto={this.previousPhoto}/>
      </div>
    )
  }
}

export default App;
