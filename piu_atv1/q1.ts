/*
 Escreva um programa Javascript que classifique se um dado número n é positivo, negativo ou zero.
Exiba:
- "positivo" se o número for maior que zero.
- "negativo" se for menor que zero.
- "zero" se for igual a zero.
*/

function checarNumero(num: number): void {
    if (num > 0) {
        return console.log("Positivo");
    } else if (num === 0) {
        return console.log("Zero");
    } else {
        return console.log("Negativo");
    }
}

var neg: void = checarNumero(-2);
var pos: void = checarNumero(3);
var zero: void = checarNumero(0);