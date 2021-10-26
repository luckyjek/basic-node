"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

console.log("helo register");
registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 다시 입력해주세요.");
    if (psword.value !== confirmPsword.value)
        return alert("비밀번호가 일치하지 않는다..");

    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    console.log(req);
    // console.log(req, JSON.stringify(req));
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
}
