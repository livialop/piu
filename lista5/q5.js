/*
Q5 – Crie uma classe Funcionario com:
Campos privados #nome, #salarioBase.
Construtor que recebe nome e salário base.
Método privado #calcularBonus() que retorna 10% do salário base.
Método público salarioTotal() que retorna a soma do salário base com o bônus (usando o método privado).
Instancie um funcionário e exiba o salário total. Apenas para testar, tente acessar o campo #nome diretamente fora da classe e observe o erro.
*/

class Funcionario {
    #nome
    #salarioBase

    constructor(nome, salarioBase) {
        this.#nome = nome;
        this.#salarioBase = salarioBase;
    }

    #calcularBonus(salarioBase) {
        return (salarioBase * 0.10)
    }

    salarioTotal() {
        return (this.#calcularBonus(this.#salarioBase) + this.#salarioBase);
    }
}

func = new Funcionario("Lívia", 1000)

console.log(func.salarioTotal())