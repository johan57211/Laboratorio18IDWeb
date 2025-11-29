const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/

console.log(regex.test("01/01/2024"));
console.log(regex.test("31/12/1999"));
console.log(regex.test("32/01/2024"));
console.log(regex.test("15/13/2024"));
console.log(regex.test("5/10/2024"));
console.log(regex.test("05-10-2024"));
