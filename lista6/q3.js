/*
Q3 – Crie uma função esperar(ms) que recebe um tempo em milissegundos e retorna uma Promise. A Promise retornada espera o dado tempo e resolve passando o valor “Terminou!”. No programa principal, antes de chamar a função esperar, exiba “Esperando XXXXms…” no console. Em seguida, chame a função esperar e use o método .then para exibir a mensagem no console. O que acontece se você exibir algo depois da chamada à função esperar? Experimente.
*/

function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terminou!");
        }, ms);
    });
}

let tempo = 2000;
console.log(`Esperando ${tempo}ms...`);

esperar(tempo)
    .then(resultado => {
        console.log(resultado);
    });

console.log("Teste");
console.log("O teste é exibido antes de terminar o tempo de espera");