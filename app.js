//express server프레임워크를 사용하지않은 개발. http : 내장모듈사용 따라서
//npm으로 따로 다운받을 필요는 없다.
const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // console.log(req.url);
    if (req.url === "/") {
        res.end("여기는 루트 화면입니다.");
    } else if (req.url === "/login") {
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("http로 가동된 서버입니다.");
});
//express를 왜 써야하나? 1. if 를넣는순간 너무 지저분해졌다. 2. 따로 한글설정을해야줘야한다.(깨짐)

// //app.js는 서버의 중심 파일이다.
// //express라는 서버프레임워크를 사용한다.
// const express = require("express"); //reuqire를 사용해서 express 모듈을 다운받는다.
// const app = express(); //app이라는 변수에 express를 실행시켜서 변수안에 넣어준다.

// app.listen(3000, () => {
//     console.log("sever start");
// }); //listen이라는 명령어로 서버를 띄울 수 있다.
// //첫번째 파라미터는 3000번으로 띄워달라!
// //두번째 파라미터로는 콜백함수를 넘길수있다.

// //서버에서 root경로 잘 만들어주기
// app.get("/", (req, res) => {
//     res.send("여기는 루트입니다.");
// }); //'/'경로로 만들어줄것이고, 파라미터로 콜백함수를 넘겨준다.
// //브라우저의 요청이 뭔지 알기위해서 파라미터로 rest를받고,response까지 받아준다.

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.");
// });
