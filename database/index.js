var mysql = require('mysql');
const faker = require('faker');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'photos'
});

var getPhotos = function(callback) {
  connection.query('SELECT * FROM photos', function (err, rows, fields) {
    if (err) {
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

// var insertInfo = function(callback) {
//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
//   }
//   var id = 51;
//   var randomFriends = 1;
//   var randomReviews = 1;
//   var randomName = '';
//   while (id <= 1000) {
//     randomFriends = getRandomInt(1, 1000);
//     randomReviews = getRandomInt(1, 100);
//     randomName = faker.name.findName();
//     id++;
//     connection.query(`UPDATE photos SET url = "https://loremflickr.com/meal" WHERE id > 50;`, function (err, rows, fields) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null);
//       }
//     });
//   }
// }

//module.exports.insertInfo = insertInfo;
module.exports.getPhotos = getPhotos;
