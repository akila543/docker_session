'use strict'
const http = require('http')
    , express = require('express')
    , path = require('path');
const request= require('superagent');

const mysql = require('mysql');
const con = require('./mysql.connect.js');
//console.log("host",MYSQL_HOST);




const app = express()
    , server = http.createServer(app);

app.get('/sample', (req, res) => {
  res.send("Hey!! sample route is working fine")
})

//request.get('http://172.23.0.8:1108/microservice')
        //.end((err, res)=>{
          //console.log('from node app server 2 ',res);

        //});

con.connect((err) =>{
 if(err) throw err;
 console.log('Connected to mysql from nodeapp1');
 con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

// creating server and making it listen on port 1108
server.listen(1107, err => {
  // if error while starting server throw error
  if(err) throw err
  console.log(' server running on 1107')
})


//var con = mysql.createConnection({ host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, database: process.env.MYSQL_DATABASE});
