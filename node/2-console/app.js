console.log("logging....");
console.clear();

//log level
console.log("log"); //개발
console.info("info"); //정보
console.warn("warn"); //경보
console.error("error"); //에러, 사용자에러, 시스템에러

//assert --참이 아닌 경우, 로그에 출력된다.
console.assert(2 === 2, "same!");
console.assert(2 === 3, "not same!");

//print object
const student = { name: "ellie", age: 20 };
console.log(student);
console.table(student);

//measuring time --같은 레이블일 경우, 시작하고 끝나는거를 확인가능하다.
console.time("for loop start");
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd("for loop start");

//counting
function a() {
    console.count("a function");
}
a();
console.countReset("a function");
a();

//trace --디버깅할때 유용하게 사용된다.
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log("f3");
    console.trace();
}
f1();
