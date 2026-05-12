/*
Q2 (25 pts) – Implemente um sistema de controle de estoque que atenda aos requisitos
abaixo modelando os dados e comportamentos utilizando as construções adequadas do
JavaScript.
1. Um estoque tem uma lista (Array) de itens.
2. Cada item tem um identificador, uma descrição, e uma quantidade.
3. É possível abastecer um estoque com itens ou retirá-los para consumo.
a. Crie métodos abastecer(item) e retirar(id, quantidade).
4. Não deve haver itens com identificador duplicado no estoque. Caso um identificador
já exista, some as quantidades automaticamente e preserve a descrição anterior.
5. Só é possível retirar itens para consumo se houver quantidade suficiente. Caso não
haja, lance uma exceção usando throw.
6. O estoque deve manter uma lista de registros efetuados de entrada e saída de
materiais.
Teste seu programa com a sequência de operações abaixo:
1. Crie o estoque e adicione os seguintes itens (nesta ordem):
*/


const estoque = {
    itens: [],
    registros: [],

    abastecer: function(items) {
        items.forEach(item => {
            let itemExiste = this.itens.find((i => i.id === item.id));
            if (itemExiste) {
                itemExiste.quantidade += item.quantidade;
            } else {
                this.itens.push(item);
            }

            // adc ao registro

            this.registros.push({
                msg: `Abasteceu ${item.quantidade}un de ${item.id}` 
            })

        });
    },

    retirar: function(id, quantidade) {
        let item = this.itens.find((i => i.id === id));

        if (!item) {
            throw new Error ("Item não existe")
        }

        if (item.quantidade < quantidade) {
            throw new Error ("O produto não pode ficar negativado")
        }

        item.quantidade -= quantidade;

        this.registros.push({
            msg: `Retirou -${quantidade}un de ${item.id}`
        })


    }
}



estoque.abastecer([
    {id: 1, descricao: "Caixa de Tintas", quantidade: 40},
    {id: 2, descricao: "Pincel", quantidade: 20},
    {id: 3, descricao: "Papel", quantidade: 500},
    {id: 4, descricao: "Tesoura", quantidade: 15},
    {id: 2, descricao: "Pincel", quantidade: 0}
])

estoque.abastecer([
    {id: 2, quantidade: 20}
])

try {
    estoque.retirar(1, 10);
    estoque.retirar(2, 40);
    estoque.retirar(4, 10);
    estoque.retirar(4, 5);
    estoque.retirar(4, 10);


} catch (erro) {

    console.log("ERRO:", erro.message);

}

console.log(estoque.itens)
console.log(estoque.registros)
