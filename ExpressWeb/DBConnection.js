var mysql = require('mysql');

var dbconfig = {
  host:'localhost',
  user:'root',
  password:'1111',
  port:3306,
  database:'studydb'
}

var pool = mysql.createPool(dbconfig);

module.exports = pool;