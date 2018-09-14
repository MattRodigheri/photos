import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('app'));

$(".left-arrow").mouseenter(function() {
  $(".left-caption").fadeOut(2);
});

$(".left-arrow").mouseleave(function() {
  $(".left-caption").fadeIn(200);
});

$(".right-arrow").mouseenter(function() {
  $(".right-caption").fadeOut(2);
});

$(".right-arrow").mouseleave(function() {
  $(".right-caption").fadeIn(200);
});

$(".left-photo").mouseenter(function() {
  $(".left-caption").fadeIn(200);
  $(".center-caption").fadeOut(2);
});

$(".left-photo").mouseleave(function() {
  $(".left-caption").fadeOut(2);
  $(".center-caption").fadeIn(200);
});

$(".right-photo").mouseenter(function() {
  $(".right-caption").fadeIn(200);
  $(".center-caption").fadeOut(2);
});

$( ".right-photo" ).mouseleave(function() {
  $(".right-caption").fadeOut(2);
  $(".center-caption").fadeIn(200);
});
