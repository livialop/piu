/*
 Modifique o programa da questão anterior usando uma função arrow (que usa a sintaxe () => {} ) no lugar da função anônima. 
*/

numeros = [2, 3, 4, 2, 3, 6]

var multiplicacao = (fator, numeros) => {
    let numeros_multiplicados = []
    numeros.forEach(num => {
        numeros_multiplicados.push(num * fator);
    });
    console.log(`Números normais: ${numeros}`)
    console.log(`Números multiplicados por ${fator}: ${numeros_multiplicados}`)
}

multiplicacao(3, numeros)