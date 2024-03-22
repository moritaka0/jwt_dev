const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const auth = require("./auth");
const app = express();
//expressでjson形式を利用するという宣言
app.use(express.json());
const PORT = 3000;

app.listen(PORT, console.log("server running"));

//登録
app.post("/register", (req, res) => {
  const payload = {
    username: req.body.username,
    email: req.body.email
  };
  //リクエストで取得した情報からトークンを作成する
  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);
  console.log(req.body);

  const body = {
    username: req.body.username,
    email: req.body.email,
    token: token
  };
  res.status(200).json(body);
});

//ログイン
//第二引数にauthメソッドを入れることでauthが成功したら処理がすすむ
app.get("/login", auth, (req, res) => {
  res.status(200).json({
    msg: "ログインに成功しました"
  });
});
