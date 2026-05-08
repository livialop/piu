/*
Q7 – Crie uma classe base Animal com propriedade nome e método falar() que retorna "[nome] emitiu um som.". 
Em seguida, crie uma classe Cachorro que herda de Animal, chama super no construtor e sobrescreve o método 
falar() para retornar "[nome] latiu: Au au!". Faça o mesmo para a classe BemTeVi. Instancie um cachorro e 
um bem-te-vi e chame o método falar() em ambos.
*/

class Animal {
    constructor (nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} emitiu um som.`
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }
    
    falar() {
        return `${this.nome} latiu: Au au!`
    }
}

class BemTeVi extends Animal {
    constructor(nome) {
        super(nome);
    }
    
    falar() {
        return `${this.nome} piou: Bem-Te-Vi!`
    }
}

livia = new Animal("Lívia")
console.log(livia.falar())

livialop = new Cachorro("LíviaLop")
console.log(livialop.falar())

livialopnob = new BemTeVi("LíviaLopNób")
console.log(livialopnob.falar())