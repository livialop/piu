/*
Reescreva o programa da questão Q2 de maneira que ele valide se o tipo da variável n é inteiro. 
Caso não seja, lance uma exceção (use throw).
*/

// fiz em javascript pelo mesmo motivo da q6.
function tabuadaMultiplicacao(num) {
    
    if (typeof num == "number") {
        console.log("Tabuada de ", num);
        for (var i=0; i<=10; i++) {
            console.log(i, " x ", num, " = ", num * i);
    }
    } else {
        throw "Tipo inválido. Precisa ser um número";
    }
    
}

tabuadaMultiplicacao(7)
tabuadaMultiplicacao("a")