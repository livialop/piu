
class Estoque {
    constructor () {
        this.itens = []
        this.registros = []
    }

    abastecer(item) {
        this.itens.forEach(item => {
            for (let i of this.itens) {
                if (i.id == item.id) {
                    i.quantidade =+ item.quantidade
                    this.registrar(item.id, item.quantidade)
                    return
                }
            }
        });
        this.itens.push(item);
        this.registrar(item.id, item.quantidade);

    }

    retirar(id, quantidade) {
        this.itens.forEach(item => {
            if (item.id == id) {
                if (quantidade > item.quantidade) {
                    throw new Error ("n pode qnt tirada ser maior doq tem no estoque");
                } else {
                    item.quantidade -= quantidade;
                    quantidade = -quantidade;
                    this.registrar(item.id, quantidade);
                    return
                }
            } else {
                throw new Error("item nao existe")
            }
        });
    }

    registrar(id, quantidade) {
        if (quantidade > 0) {
            this.registros.push(`Abasteceu ${quantidade}un. de #${id}`)
        } else {
            this.registros.push(`Retirou ${quantidade}un. de #${id}`)
        }
    }

}

class Item {
    constructor() {
        this.id;
        this.nome;
        this.quantidade;
    }
}

estoque = new Estoque()
item1 = new Item()
item1.id = 1;
item1.nome = 'Caixa de Tintas';
item1.quantidade = 40;

estoque.abastecer(item1)

estoque.retirar(item1.id, 20);

console.log(estoque)