/*
Escreva um programa que filtre os números pares de um array. Crie uma função filtrarPares(numeros) 
que recebe um array de números e retorna um novo array contendo apenas os números pares. 
Combine o método filter do array com uma função anônima.
*/

var filtrarPares = function(numeros) {
    numeros_pares = numeros.filter(n => n % 2 === 0)
    console.log(numeros_pares)
}

filtrarPares([1, 2, 2, 3, 5, 6])