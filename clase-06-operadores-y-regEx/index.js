//admite solo minúsculas y números (al menos 1 de cada tipo)
const WEAK_PASS = /^(?=.*[a-z])(?=(?:\w.*\d))(?!.*[A-Z#@$!%*?&_])([a-z\d]|[^ ]){2,8}$/

//admite WEAK_PASS + mayúsculas (al menos 1)
const MEDIUM_PASS = /^(?=(?:\w.*\d))(?=.*[A-Z])(?=.*[a-z])(?!.*[#@$!%*?&_])([a-zA-Z\d]|[^ ]){2,8}$/;

//admite MEDIUM_PASS + caracter especial (al menos 1)
const STRONG_PASS = /^(?=(?:\w.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[#@$!%*?&_])([a-zA-Z\d#@$!%*?&_]|[^ ]){2,8}$/;

console.log(WEAK_PASS.test("a_1"));
console.log(WEAK_PASS.test("h52"));//
console.log(WEAK_PASS.test("a1l4a?"));//
console.log(WEAK_PASS.test("b13sdx"));//

console.log(WEAK_PASS.test("t4"));
console.log(WEAK_PASS.test("127"));

console.log(WEAK_PASS.test("a1?"));
console.log(WEAK_PASS.test("15*aw"));
console.log(WEAK_PASS.test("*1a"));//

console.log(WEAK_PASS.test("A1"));
console.log(WEAK_PASS.test("1Aw"));
console.log(WEAK_PASS.test("b13 aaa"));
console.log(WEAK_PASS.test("ttttte"));