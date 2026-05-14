/*
Escreva um programa que dobre os números de um array. Crie uma função dobrar(numeros) que recebe um 
array de números e retorna um novo array contendo o dobro de cada número. Combine o método map do 
array com uma função anônima.
Ex.:
dobrar([1, 2, 2, 3, 5, 6]) // retorna [2, 4, 4, 6, 10, 12]
*/

var dobrar = function(array_numbers) {
    let double = array_numbers.map(n => n * 2);
    console.log(double)
}

dobrar([1, 2, 2, 3, 5, 6])