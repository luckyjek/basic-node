"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    hello: (req, res) => {
        res.render("home/index"); // '/' 도메인으로왔을때, 이동할 수 있는 코드.
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // return res.json(response);

        // console.log(req.body);
        // const id = req.body.id,
        //     psword = req.body.psword;
        // console.log(id, psword);
        // const users = UserStorage.getUsers("id", "psword");
        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json();
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);
    },
};
module.exports = {
    output,
    process,
};

// {
// hello:hello,
// login:login,
// }
