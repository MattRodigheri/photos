const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use('/:rest_id', express.static(__dirname + './../public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/restaurant/:rest_id/photos', function(req, res) {
  dbMethods.getPhotos(req.params.rest_id, function(err, data) {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3005, () => console.log('listening on port 3005!'));
