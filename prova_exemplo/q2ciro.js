class Estoque {
    constructor() {
        this.itens = []
        this.registros = []
    }

    abastecer(itemclass) {
        this.itens.forEach(item => {
            for (let i = 0; i <= this.itens.length; i++) {
                if (this.itens[i].id == item.id) {
                    this.itens[i].quantidade += item.quantidade;
                    this.registrar(item.id, item.quantidade);
                }
            }
        });
        // se ainda n existe na lista de itens
        this.itens.push(itemclass);
        this.registrar(itemclass.id, itemclass.quantidade)
    }

    retirar(id, quantidade) {
        this.itens.forEach(itemclass => {
            if (itemclass.id === id) {
                if (quantidade < itemclass.quantidade) {
                    itemclass.quantidade -= quantidade;
                    this.registrar(id, -quantidade);
                } else {
                    throw new Error("Não é possível retirar mais quantidade do que a do estoque.");
                }
            } else {
                throw new Error("Item não existe");
            }
        });
    }

    registrar(id, quantidade) {
        if (quantidade >= 0) {
            this.registros.push(`Abasteceu ${quantidade}un. de #${id}.`)
        } else {
            this.registros.push(`Retirou ${quantidade}un. de #${id}`)
        }
    }

}

class Item {
    constructor() {
        this.id
        this.descricao
        this.quantidade
    }
}


estoque = new Estoque()
item1 = new Item()
item1.id = 1;
item1.nome = 'Caixa de Tintas';
item1.quantidade = 40;

estoque.abastecer(item1)

estoque.retirar(item1.id, 0);

console.log(estoque)