/*
Modifique o programa da questão anterior usando uma função arrow (que usa a sintaxe () => {} ) no lugar da função anônima. 
*/

array_numbers = [1, 2, 5, 6, 5, 5, 0, 10]

var parOuImpar = (array_of_numbers) => {
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