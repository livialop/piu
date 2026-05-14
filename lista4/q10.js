/*
Modifique o programa da questão anterior usando uma função arrow (que usa a sintaxe () => {} ) no lugar da função anônima.
*/

var somar = (numeros) => {
    console.log(numeros.reduce(
        (valor_antigo, valor_atual) => valor_antigo + valor_atual
    ))
}

somar([1, 2, 2, 3, 5, 6])