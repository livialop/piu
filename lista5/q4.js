/*
Q4 – Finalmente chegamos à sintaxe mais comum de declaração e instanciação de classes. Também não é a coisa mais linda que a humanidade já criou, 
mas é o que temos. Ou talvez eu só esteja sendo chato porque não sei fazer melhor. Enfim… declare uma classe (usando class) chamada Retangulo com 
um construtor que recebe altura e largura e os armazena como propriedades da instância. Adicione um método area() que retorna o produto de altura * largura. 
Instancie um retângulo e exiba sua área.
*/

class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return (this.altura * this.largura);
    }
}

retang = new Retangulo(3, 5)
console.log(retang.area())