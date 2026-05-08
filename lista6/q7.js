/*
Q7 – Adapte o código da questão Q6 de maneira que a função getStatus receba um id e um booleano condicao e retorne uma Promise com o seguinte comportamento:
Esperar um tempo aleatório entre 1 e 3 segundos.
Resolver com “(id) Sucesso :)” ou rejeitar com “(id) Erro :(” de acordo com o booleano informado.
Instancie 3 Promises (ids 1, 2 e 3) e execute com Promise.any. Experimente colocar todos os valores booleanos true, todos false e misturá-los. Analise o resultado.
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

let ids = [getStatus(1, false), getStatus(2, true), getStatus(3, false)]

Promise.any(ids)
    .then((resultado) => {
        console.log(resultado);
    });

// Com todas ou 2 sendo true, ele escolhe aleatoriamente entre elas para retornar.
// Não há retorno de rejected promises. Caso todas sejam rejected, retorna o erro.