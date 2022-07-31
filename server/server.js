const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

/**
 * http://localhost:3000/
 */
app.get("/", function (req, res) {
  res.send("helloasds NodeJs !!!!@@@@");
});

app.get("/getList", function (req, res) {
  const params = req.query;
  const id = params.id;

  res.send({
    title: "안녕하세요",
    content: "안녕하세요 게시글입니다  .",
  });
});

app.listen(3000, function () {});
