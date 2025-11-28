//multiplicacionDivision

export default function multiplicar (a, b) {
    return a * b;
}

export function division (a, b) {
    if (b === 0){
        throw new Error ("No se puede dividir entre 0");
    }
    return a / b;
}