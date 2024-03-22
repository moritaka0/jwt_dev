/*
index.jsでjwtオブジェクトを利用するときの設定をここに記述
methodの引数に渡す情報
*/
require("dotenv").config();
module.exports = {
  jwt: {
    secret: process.env.SECRETKEY,
    options: {
      algorithm: "HS256",
      expiresIn: "1d"
    }
  }
};
