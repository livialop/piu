/*
Modifique o programa da questão anterior usando uma função arrow (que usa a sintaxe () => {} ) no lugar da função anônima. 
*/

var filtrar = (divisor, numeros) => {
    numeros_divisiveis = numeros.filter(n => n % divisor == 0)
    console.log(numeros_divisiveis)
}

filtrar(3, [1, 2, 2, 3, 5, 6])