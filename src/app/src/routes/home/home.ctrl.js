"use strict";
const hello = (req, res) => {
    res.render("home/index"); // '/' 도메인으로왔을때, 이동할 수 있는 코드.
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};

// {
// hello:hello,
// login:login,
// }
