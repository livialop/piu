/*
Q6 – Reutilize o código da questão Q5, porém agora execute a lista de Promises com Promise.allSettled. O que acontece agora se passar false para uma delas? Experimente.
*/

function getStatus(condicao) {
    if (condicao) {
        return Promise.resolve("Sucesso!");
    } else {
        return Promise.reject("Falha!");
    }
}

listaPromessas = [getStatus(true), getStatus(false), getStatus(true)]

Promise.allSettled(listaPromessas)
    .then((resultado) => {
        console.log(resultado);
    })

// O código não falha. Ao printar o resultado, a promise rejected aparece como "{ status: 'rejected', reason: 'Falha!' }"