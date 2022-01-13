// express import
const express = require('express');
// app 객체 생성
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static('./public/javascripts'));
app.use(express.static('./public/stylesheets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/login', function(req, res){
  const root = document.querySelector("#container");
  root.innerHTML += logIn.getHtml();
  res.sendFile(root);
});

app.listen(port, function(){
  console.log("start! express server on port 3000");
  console.log("check at http://localhost:3000");
});