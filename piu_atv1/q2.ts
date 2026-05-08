/*
Escreva um programa Javascript que gere a tabuada de multiplicação de um valor pré-definido n.
*/

function tabuadaMultiplicacao(num: number): void {
    console.log("Tabuada de ", num);
    for (var i=0; i<=10; i++) {
        console.log(i, " x ", num, " = ", num * i);
    }
}

tabuadaMultiplicacao(7)
tabuadaMultiplicacao(2)