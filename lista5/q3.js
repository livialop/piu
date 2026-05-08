/*
Funções construtoras são um pouco feias, porém mais feio do que elas é criar objetos usando protótipos. 
Mas você também precisa saber que isso existe, pois pode se deparar com código escrito assim. 
Então crie um objeto protótipo animalProto com as propriedades grupo e um método descrever() 
que retorna "Este(a) é um(a) [grupo]". Em seguida, use Object.create() para criar dois 
objetos: um peba com grupo = "mamífero" e uma arribaçã com grupo = "ave". Chame o método 
descrever() para cada um.
*/

const animalProto = {
    nome: "",
    grupo: "",
    descrever: function() {
        return `Este(a) é um(a) ${this.nome} do grupo ${this.grupo}.`
    }
}

var peba = Object.create(animalProto);
peba.nome = "Peba";
peba.grupo = "Mamíferos";

var arribaca = Object.create(animalProto);
arribaca.nome = "Arribaçã";
arribaca.grupo = "Aves";

console.log(peba.descrever())
console.log(arribaca.descrever())