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
      callback(rows)
    }
  })
}

module.exports.getPhotos = getPhotos;
