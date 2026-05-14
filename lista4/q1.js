/*
Escreva um programa que identifique se os números de um array são pares ou ímpares (considere 0 par).
Crie uma função parOuImpar(numeros) que recebe um array de números e exibe, para cada número, se ele 
é par ou ímpar. Combine o método forEach do array com uma função anônima.
*/

var parOuImpar = function(array_of_numbers) {
    array_of_numbers.forEach(number => {
        if (number == 0) {
            console.log(number + " é zero");
        } else if (number % 2 == 0) {
            console.log(number + " é par");
        } else {
            console.log(number + " é ímpar");
        }
    });
}

parOuImpar([1, 2, 5, 6, 0]);