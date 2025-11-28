//app.js

import {suma, resta} from "./sumaResta.js"
import multiplicar from "./multiplicacionDivision.js"
import { division } from "./multiplicacionDivision.js"

console.log("La suma es: " + suma(2, 4));
console.log("La resta es: " + resta(5, 3));
console.log("La multiplicacion es: "+multiplicar(4, 5));
try{
    console.log("La division es: " + division(3, 0));
} catch (e) {
    console.error("Error en la division: " + e);
}

try{
    console.log("La division es: "+division(9, 3));
} catch (e) {
    console.error("Error en la division: " + e);
}