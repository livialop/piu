/*
Q6 – Crie uma classe ContaBancaria com:
Uma propriedade privada #saldo (inicializada em 0)
Um método get para o saldo que retorna o valor formatado como "R$ X,XX".
Um método set para o saldo que só permite valores não negativos (lança erro se negativo).
Teste: deposite 100 reais, tente definir saldo negativo e veja o comportamento.
*/


class ContaBancaria {
    #saldo;

    constructor () {
        this.#saldo = 0;
    } 

    getSaldo() {
        return `R$${this.#saldo}`;
    }

    setSaldo(novoSaldo) {
        if (novoSaldo > 0) {
            this.#saldo = novoSaldo;
        } else {
            throw new Error("Valor precisa ser maior que zero.")        
        }

    }
}

minhaConta = new ContaBancaria();
minhaConta.setSaldo(100);
console.log(minhaConta.getSaldo());