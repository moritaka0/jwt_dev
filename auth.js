//ログイン認証のロジックをこのJSでもつ
const jwt = require("jsonwebtoken");
const config = require("./config");

function auth(req, res, next) {
  try {
    //承認用のトークンを設定する
    const token = req.headers.token;
    //トークンの有効性を確認するメソッドがverify,tokenの値をサーバー側の秘密鍵を使ってデコードする
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log(decoded);
    next();
  } catch (err) {
    return res.send(401).json({
      msg: "認証できません"
    });
  }
}

module.exports = auth;
