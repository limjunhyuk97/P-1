const express = require('express')
const path = require("path");
const app = express();

// DB 대신 임시로 사용
const userData = [];

app.use("/public", express.static(path.resolve(__dirname, "Client", "public")));
app.use(express.json());

app.post("/enroll", async (req, res) => {
  const {id, pw, stuID} = req.body; 
  userData.forEach((el)=> {
    if(el.stuID === stuID){
      res.json({result : false, detail : "id error"});
    }
    else if(el.id === id ) {
      res.json({result : false, detail : "stuID error"})
    }
  });
  userData.push({id, pw, stuID});
  res.json({result : true});
});

app.post("/login", async (req, res) => {
  const {id, pw} = req.body;
  userData.forEach(el => {
    if(el.id === id){
      if(el.pw === pw) res.json({result : true, stuID : el.stuID});
      else res.json({result : false, detail : "pw error"});
    }
  })
  res.json({result : false, detail : "id error"});
})

app.get("/*", (req, res)=>{
  res.sendFile(path.resolve("Client", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running in http://localhost:3000"));