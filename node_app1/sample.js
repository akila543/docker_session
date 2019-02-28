'use strict'
const http = require('http')
    , express = require('express')
    , path = require('path');
const request= require('superagent');
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://172.23.0.6:27017/';
const app = express()
    , server = http.createServer(app);


const data=[{
  "name":"akila",
  "age":22
}];

app.get('/sample', (req, res) => {
  res.send("Hey!! sample route is working fine")
})

mongoClient.connect(url,(err,client)=>{
  if (err) throw err;
  else{
    console.log("Connected to MongoDB");
    const db = client.db('mydb');
    db.collection('sample').insertMany(data,(err,result)=>{
      if(err) throw err;
      console.log("inserted")
    })
  }
  


})



server.listen(1107, err => {
  
  if(err) throw err
  console.log(' server running on 1107')
})


