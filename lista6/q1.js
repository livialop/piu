/*
Q1 – Crie uma função getStatus(condicao) que recebe um booleano. Se true, retorna Promise.resolve("Sucesso!"). 
Se false, retorna Promise.reject("Falha!"). Consuma a função com .then() e .catch().
*/

function getStatus(condicao) {
    if (condicao) {
        return Promise.resolve("Sucesso!");
    } else {
        return Promise.reject("Falha!");
    }
}

getStatus(true)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });

    
getStatus(false)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });