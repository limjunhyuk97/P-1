// express import
const express = require('express');
// app 객체 생성
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static('./public'));
app.use(express.static('./public/static/js'));
app.use(express.static('./public/static/css'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, function(){
  console.log("start! express server on port 3000");
  console.log("check at http://localhost:3000");
});