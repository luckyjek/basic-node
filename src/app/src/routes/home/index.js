"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
//서버에서 root경로 잘 만들어주기
router.get("/", ctrl.output.hello); //'/'경로로 만들어줄것이고, 파라미터로 콜백함수를 넘겨준다.
//브라우저의 요청이 뭔지 알기위해서 파라미터로 rest를받고,response까지 받아준다.

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;
