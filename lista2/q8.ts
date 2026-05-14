/*
Reescreva o programa da questão Q3 como uma função que receba como parâmetro a lista de números, armazene a quantidade de pares 
e ímpares em um objeto JSON e retorne-o no final. Caso o número não seja inteiro, lance uma exceção (use throw).
Ex.:
{‘pares’: 3, ‘impares’, 5}
*/


function qntNumParEImpar(listaNum: Array<number>): void {
    let quantidadePares: number = 0;
    let quantidadeImpares: number = 0;

    for (var num of listaNum) {
        if (Number.isInteger(num)) {
            if (num % 2 == 0) {
                quantidadePares += 1;
            } else {
                quantidadeImpares += 1;
            }
        } else {
            throw "Inválido. Os números precisam ser inteiros.";
        }
    }

    const quantidade = {"Pares": quantidadePares, "Ímpares": quantidadeImpares};

    return console.log(JSON.stringify(quantidade));
}

var listaNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
qntNumParEImpar(listaNumeros);
console.log('--------');
var listaDois: Array<number> = [1, 2, 3.5];
qntNumParEImpar(listaDois);