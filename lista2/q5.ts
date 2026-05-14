/*
Escreva um programa Javascript que cadastre os mesmos dados de uma pessoa como na questão Q4: nome (string), idade (int), 
já foi à Disney (booleano). Os dados agora devem ser representados como uma matriz 3x2 (array de arrays), onde cada linha 
é uma lista com nome e valor do atributo. Tanto as chaves quanto os dados devem ser exibidos dentro de um laço for... in.
Ex.:
nome Teste
idade 10
ja_foi_a_Disney false
*/

function exibirDadosPessoais(nome: string, idade: number, jaFoiADisney: boolean): void {
    const dados = [["nome", nome], ["idade", idade], ["já foi pra disney", jaFoiADisney]]

    for (let i in dados) {
        console.log(dados[i][0], dados[i][1])
    }
}

exibirDadosPessoais("Lívia", 19, false)