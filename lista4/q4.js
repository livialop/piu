/*
Modifique o programa da questão anterior para que a função seja multiplicar(fator, numeros)
e multiplique os números pelo fator
*/

var multiplicar = function(fator, numeros) {
    let numeros_multiplicados = []
    numeros.forEach(num => {
        numeros_multiplicados.push(num * fator);
    });
    console.log(`Números normais: ${numeros}`)
    console.log(`Números multiplicados por ${fator}: ${numeros_multiplicados}`)
}


multiplicar(3, [1, 2, 2, 3, 5, 6])