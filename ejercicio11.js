const regex = /https:\/\/[a-zA-Z0-9.-]+\.[a-zA-z]{2,}(\/\S*)?$/
function validarUrlSegura (url) {
    return regex.test(url);
}

console.log(validarUrlSegura("https://google.com"));
console.log(validarUrlSegura("https://midominio.org/blog"));
console.log(validarUrlSegura("http://inseguro.com"));
console.log(validarUrlSegura("https://otro"));