/*
Q5 – Reutilize a função da questão Q1.  Crie uma lista com 3 Promises de getStatus passando true em todas e execute com Promise.all. O que acontece se você passar false para uma delas? Experimente.
*/

function getStatus(condicao) {
    if (condicao) {
        return Promise.resolve("Sucesso!");
    } else {
        return Promise.reject("Falha!");
    }
}

listaPromessas = [getStatus(true), getStatus(false), getStatus(true)]

Promise.all(listaPromessas)
    .then((resultado) => {
        console.log(resultado)
    });

// Quando qualquer promise da lista é falsa, o Promise.all() retorna o erro com a mensagem do reject.