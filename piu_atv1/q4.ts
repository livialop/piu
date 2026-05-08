/* 
Escreva um programa Javascript que cadastre os seguintes dados de uma pessoa: nome (string), idade (int), 
já foi à Disney (booleano). Os dados devem ser representados como um objeto javascript (JSON, semelhante aos dicionários Python) 
usando a sintaxe de pares chave-valor e devem ser exibidos usando a notação de acesso a atributos de objeto (variavel.atributo).
Ex.:
Alex
10
false
*/

function dadosPessoais(nome: string, idade: number, jaFoiADisney: boolean): string {
    let dados = {"nome": nome, "idade": idade, "JaFoiPDisney": jaFoiADisney}
    return JSON.stringify(dados)
}

var meusDados: string = dadosPessoais('livia', 19, false)
console.log(meusDados)