const mysql = require('mysql'),
      con = mysql.createConnection({
      	host:"172.23.0.4",
      	user:'root',
      	password:"1234",
      	insecureAuth:true
      });

module.exports = con;