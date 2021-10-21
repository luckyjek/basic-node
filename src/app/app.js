"use strict";

//app.js는 서버의 중심 파일이다.
//express라는 서버프레임워크를 사용한다.
// 모듈
const express = require("express"); //reuqire를 사용해서 express 모듈을 다운받는다.
const app = express(); //app이라는 변수에 express를 실행시켜서 변수안에 넣어준다.

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); //set해서 views를세팅해줄건데, 화면 뷰를 관리해줄 파일폴더 저장될 이름을 2번째파라미터로 전달./views
app.set("view engine", "ejs"); //ejs 뷰엔진세팅.
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //use는 미들웨어를 들록해주는 메서드.

module.exports = app;
//첫번째 파라미터는 3000번으로 띄워달라!
//두번째 파라미터로는 콜백함수를 넘길수있다.

// //express를 왜 써야하나? 1. if 를넣는순간 너무 지저분해졌다. 2. 따로 한글설정을해야줘야한다.(깨짐)
// //express server프레임워크를 사용하지않은 개발. http : 내장모듈사용 따라서
// //npm으로 따로 다운받을 필요는 없다.
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     // console.log(req.url);
//     if (req.url === "/") {
//         res.end("여기는 루트 화면입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });
