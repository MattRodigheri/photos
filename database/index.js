var mysql = require('mysql');
const faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'photos'
});

var getPhotos = function(restId, callback) {
  connection.query(`SELECT * FROM photos WHERE rest_id = ${restId}`, function (err, rows, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

module.exports.getPhotos = getPhotos;
