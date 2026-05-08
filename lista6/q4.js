/*
Q4 – Crie uma Promise que resolve com o número 5. Encadeie dois .then():
Primeiro: recebe o número e retorna seu dobro.
Segundo: recebe o resultado anterior e retorna seu triplo.
Exiba o resultado final (deve ser 30).
*/

const promessa = new Promise((resolve) => {
    resolve(5);
})

promessa
    .then((num) => {
        return num*2;
    })
    .then((num) => {
        return num*3;
    })
    .then((resultado) => {
        console.log(resultado)
    });