/*
Q2 – Crie uma função verificarPositivo(n) que retorna uma Promise. Dentro da Promise, implemente o seguinte comportamento:
Se n não for um number, rejeite com “Tipo XX não é number.”
Se n for um number, mas for menor que 0, rejeite com "O valor XX deveria ser maior que 0".
Se n for um number positivo, apenas resolva a Promise sem devolver nada.
Na chamada da função no programa principal, exiba “Número XX é positivo.” em caso de sucesso usando o método .then() ou 
a mensagem retornada em caso de erro usando o método .catch().
*/

function verificarPositivo(n) {
    return new Promise((resolve, reject) => {
        if (Number.isNaN(n) || typeof n !== 'number') {
            reject(`Tipo ${typeof n} não é number.`)
        } else if (!Number.isNaN(n) && (n < 0 || n == 0)) {
            reject(`O valor ${n} deve ser maior que 0.`)
        } else {
            resolve();
        }
    });
}


num1 = 0;
num2 = 3;
letra = 'a';

verificarPositivo(num1)
    .then ( () => {
        console.log(`Número ${num1} é positivo`);
    })
    .catch(resultado => {
        console.log(resultado);
    });


verificarPositivo(num2)
    .then ( () => {
        console.log(`Número ${num2} é positivo`);
    })
    .catch(resultado => {
        console.log(resultado);
    })


verificarPositivo(letra)
    .then ( () => {
        console.log(`Número ${letra} é positivo`);
    })
    .catch(resultado => {
        console.log(resultado);
    });