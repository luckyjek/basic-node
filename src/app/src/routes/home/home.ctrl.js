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
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
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
