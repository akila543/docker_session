const mysql = require('mysql'),
      con = mysql.createConnection({
      	host:"mysqldb",
      	user:'root',
      	password:"root";
      });

module.exports = con;