/*
É comum em JavaScript os desenvolvedores usarem constantes para representar objetos e listas. Veja o exemplo abaixo.
const pessoa = {
    nome: 'Manoel',
    idade: 65
}
console.log(pessoa.nome, pessoa.idade)

pessoa.nome = 'Anderson',
pessoa.idade = 35
console.log(pessoa.nome, pessoa.idade)

Por que é possível alterar o nome e a idade do objeto pessoa mesmo ele tendo sido declarado como uma constante?
*/

// Resposta:
/*  
Apesar de ser declarado como uma constante, o valor do objeto permanece mutável, por isso é possível alterar seus atributos.
A declaração de 'const' torna o objeto imutável, mas não o valor. Então se você tentasse alterar o objeto para
pessoa = {novo: 'valor'}, isso daria erro.
*/


const pessoa = {
    nome: 'Manoel',
    idade: 65
}
console.log(pessoa.nome, pessoa.idade)

pessoa.nome = 'Anderson',
pessoa.idade = 35
console.log(pessoa.nome, pessoa.idade)

pessoa = {valor: 'novo'} 