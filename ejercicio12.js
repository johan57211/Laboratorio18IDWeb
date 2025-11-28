const regex = /<\/?[^>]+>/g;

const texto = "<h1>Hola</h1>";

const limpio = texto.replace(/<\/?[^>]+>/g, "");

console.log(limpio);