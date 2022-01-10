let express = require('express');
let app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
  console.log("start! express server on port 3000");
  console.log("check at http://localhost:3000");
});