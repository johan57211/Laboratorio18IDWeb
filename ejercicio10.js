const regex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

function validar(pass) {
    return regex.test(pass);
}

console.log(validar("Abcdef12"));
console.log(validar("abcdef12"));
console.log(validar("Abcdefgh"));
