/*
Modifique o programa da questão anterior para que a função seja filtrar(divisor, numeros) e 
filtre os números divisíveis por divisor do array. 
*/

var filtrar = function(divisor, numeros) {
    numeros_divisiveis = numeros.filter(n => n % divisor == 0)
    console.log(numeros_divisiveis)
}

filtrar(3, [1, 2, 2, 3, 5, 6])