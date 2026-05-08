/*
Apesar de ser um conceito antigo e com alternativas mais familiares a programadores de linguagens orientadas a objeto 
como Java ou Python, é comum ainda encontrar código JavaScript que usa funções construtoras.
Sendo assim, crie uma função construtora Pessoa(nome, idade) que cria objetos com as propriedades nome, 
idade e um método apresentar() que retorna "Olá, meu nome é [nome] e tenho [idade] anos". Instancie duas 
pessoas e exiba suas apresentações.
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

p1 = new Pessoa('Lívia', 19)
p2 = new Pessoa('Raissa', 18)
p1.apresentar()
p2.apresentar()