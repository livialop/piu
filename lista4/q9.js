/*
Escreva um programa que some os números de um array. Crie uma função somar(numeros) que recebe um array 
de números e retorna a soma. Combine o método reduce do array com uma função anônima.
*/

/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue) */

var somar = function(numeros) {
    console.log(numeros.reduce(
        (valor_antigo, valor_atual) => valor_antigo + valor_atual
    ))
}

somar([1, 2, 2, 3, 5, 6])