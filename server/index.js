const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser(express.static(__dirname + './public/')))


app.get('/photos', function(req, res) {
   res.send('Hello World!');
  // dbMethods.getPhotos = function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(data);
  //   }
  // }
})

app.listen(3000, () => console.log('listening on port 3000!'))
