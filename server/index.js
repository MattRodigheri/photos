const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + './../public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:rest_id', function(req, res) {
  dbMethods.getPhotos(function(err, data) {
    if(err) {
      res.sendStatus(503);
    } else {
      var targetInfo = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].rest_id === Number(req.params.rest_id)) {
          targetInfo.push(data[i])
        }
      }
      res.send(targetInfo);
    }
  })
})

// app.post('/photos', function(req, res) {
//   dbMethods.insertInfo(function(err, data) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('successful post')
//     }
//   })
// })

app.listen(3000, () => console.log('listening on port 3000!'))
