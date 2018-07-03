'use strict'
const http = require('http')
    , express = require('express')
    , path = require('path')
    , MongoClient = require('mongodb').MongoClient
    , assert = require('assert')
    , request = require('superagent');





const app = express()
    , server = http.createServer(app);


app.get('/microservice', (req, res) => {
  res.send("you called microservice")
})



// creating server and making it listen on port 1108
server.listen(1108, err => {
  // if error while starting server throw error
  if(err) throw err
  console.log(' server running on 1108')
})
