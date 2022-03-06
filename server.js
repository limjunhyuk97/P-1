// express 가져옴
const express = require('express')
const path = require("path");

// express 객체 생성
const app = express();

// 제공할 정적 파일에 대한 '가상 경로 접두부'를 작성하는 방식
// http://localhost:3000/static/js/app.js 와 같이 public 디렉토리에 포함된 파일 업로드 가능
app.use("/public", express.static(path.resolve(__dirname, "Client", "public")));

// server로 들어오는 모든 get 요청에 대해서 index.html을 제공한다.
app.get("/*", (req, res)=>{
  res.sendFile(path.resolve("Client", "index.html"));
});

// 3000번 포트로 듣는다.
app.listen(process.env.PORT || 3000, () => console.log("Server running in http://localhost:3000"));