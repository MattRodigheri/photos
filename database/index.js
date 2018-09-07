var mysql = require('mysql');

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
//   var id = 0;
//   var random = 1;
//   while (id < 50) {
//     random = getRandomInt(1, 100);
//     id++;
//     connection.query(`UPDATE photos SET reviews = ${random} WHERE id = ${id}`, function (err, rows, fields) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null);
//       }
//     });
//   }
// }
//
// module.exports.insertInfo = insertInfo;
module.exports.getPhotos = getPhotos;
