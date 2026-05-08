/*
Escreva um programa Javascript que conta quantos números são pares e quantos são ímpares, dado um array de números inteiros. 
Considere que zero é par. Use a construção for... of.
*/

function qntNumParEImpar(listaNum: Array<number>): void {
    let quantidadePares: number = 0;
    let quantidadeImpares: number = 0;
    
    for (var num of listaNum) {
        if (num % 2 == 0) {
            quantidadePares += 1;
        } else {
            quantidadeImpares += 1;
        }
    }

    return console.log("Quantidade de pares: ", quantidadePares, "\nQuantidade de ímpares: ", quantidadeImpares)
}

var listaNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]
qntNumParEImpar(listaNumeros)