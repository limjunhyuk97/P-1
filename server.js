const { info } = require("console");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

// DB 대신 임시로 사용 + cookie를 특별한 값으로 지정하는 과정 필요 + DUMMY 넣어둠
// userData : {id, pw, stuID, stuName}
// article : {articleNum, title, board, content, author, date}
const userData = [
  { id: "wnsgurl97", pw: "1234", stuID: "201820740", stuName: "임준혁" },
];
let freeNum = 200,
  secretNum = 1,
  infoNum = 1,
  advertNum = 1,
  swNum = 1;
const articles = (() => {
  const dummy = [];
  for (let i = 1; i < 200; ++i) {
    dummy.push({
      articleNum: `${i}`,
      title: `글${i}`,
      boardID: `free`,
      content: `글글글`,
      author: `임준혁`,
      date: `2022/3/22`,
    });
  }
  return dummy;
})();

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/public", express.static(path.resolve(__dirname, "Client", "public")));
app.use(express.json());

app.post("/enroll", async (req, res) => {
  let noIDFlag = true;
  const { id, pw, stuID, stuName } = req.body;
  userData.forEach((el) => {
    if (el.stuID === stuID) {
      noIDFlag = false;
      return res.json({ result: false, detail: "id error" });
    } else if (el.id === id) {
      noIDFlag = false;
      return res.json({ result: false, detail: "stuID error" });
    }
  });
  if (noIDFlag) {
    userData.push({ id, pw, stuID, stuName });
    return res.json({ result: true });
  }
});

app.post("/login", async (req, res) => {
  let noIDFlag = true;
  const { id, pw } = req.body;
  userData.forEach((el) => {
    if (el.id === id) {
      if (el.pw === pw) {
        noIDFlag = false;
        return res.status(200).json({ result: true, stuID: el.stuID });
      } else {
        noIDFlag = false;
        return res
          .status(409)
          .json({ result: false, detail: "wrong password!" });
      }
    }
  });
  if (noIDFlag)
    return res.status(409).json({ result: false, detail: "No such ID!" });
});

app.get("/board", async (req, res) => {
  // article의 갯수를 가져온다. 현재는 게시판이 나눠져 있지 않음
  let count = 0;
  articles.forEach((el) => {
    if (el.boardID === req.query.boardID) count += 1;
  });
  return res.status(200).json({ articleCount: count });
});

app.get("/board/main", async (req, res) => {
  const articleFrom = (req.query.page - 1) * 6 + 1;
  const articleTo = articleFrom + 5;
  const articleFiltered = articles.filter((el) => {
    return (
      el.articleNum >= articleFrom &&
      el.articleNum <= articleTo &&
      el.boardID === req.query.boardID
    );
  });
  return res.status(200).json(articleFiltered);
});

app.post("/board/post", async (req, res) => {
  const { boardID, title, content, author, date } = req.body;
  let checkAuthor = false;
  userData.forEach((el) => {
    if (el.stuID === author) {
      checkAuthor = true;
      // DB 연동 하면 이런거 없애도 됨
      switch (boardID) {
        case "free":
          articles.push({
            articleNum: `${freeNum++}`,
            title,
            boardID,
            content,
            author,
            date,
          });
          break;
        case "secret":
          articles.push({
            articleNum: `${secretNum++}`,
            title,
            boardID,
            content,
            author,
            date,
          });
          break;
        case "info":
          articles.push({
            articleNum: `${infoNum++}`,
            title,
            boardID,
            content,
            author,
            date,
          });
          break;
        case "advert":
          articles.push({
            articleNum: `${advertNum++}`,
            title,
            boardID,
            content,
            author,
            date,
          });
          break;
        case "sw":
          articles.push({
            articleNum: `${swNum++}`,
            title,
            boardID,
            content,
            author,
            date,
          });
          break;
        default:
          break;
      }
      articles.push({ boardID, title, content, author, date });
      return;
    }
  });
  if (checkAuthor) return res.status(200).end();
  else return res.status(409).end();
});

app.get("/mypage/user", (req, res) => {
  const user = userData.find((el) => el.stuID === req.query.stuID);
  console.log(user);
  if (user) return res.status(200).json(user);
  else return res.status(409).end();
});

app.get("/*", (req, res) => {
  res.status(200).sendFile(path.resolve("Client", "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () =>
  console.log("Server running in http://localhost:3000")
);
