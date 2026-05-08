/*
Q8 – Repita o código da questão Q7, porém execute com Promise.race. Analise o resultado.
*/


function tempoAleatorio() {
    let lista_numeros = [1000, 2000, 3000]
    return lista_numeros[Math.floor(Math.random() * lista_numeros.length)];
}


function getStatus(id, condicao) {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicao) {
                resolve(`${id} Sucesso :)`);
            } else {
                reject(`${id} Erro :(`);
            }
        }, tempoAleatorio());
    })
}

let ids = [getStatus(1, true), getStatus(2, true), getStatus(3, false)]

Promise.race(ids)
    .then((resultado) => {
        console.log(resultado);
    });

// O Promise.race() escolhe aleatoriamente entre os 3, mesmo que seja rejected. Quando é rejected, ele retorna o erro.