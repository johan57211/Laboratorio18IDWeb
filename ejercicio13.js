const texto = "Hola. Cómo estás? Bien!";

const oraciones = texto.match(/[^.!?]+[.!?]/g);

console.log(oraciones);
