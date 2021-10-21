"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index"); // '/' 도메인으로왔을때, 이동할 수 있는 코드.
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    paword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        // console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
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
