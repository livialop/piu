/*
Reescreva o programa da questão Q1 de maneira que ele valide se o tipo da variável n é numérico (inteiro ou real). 
Caso não seja, exiba uma mensagem informando o tipo inválido.
*/


// Fiz essa em javascript pois o typescript não permite inserir string na variavel da funcao que eu declarei como number
function checarNumero(num) {
    if (typeof num == "number") {
        if (num > 0) {
            return console.log("Positivo");
        
        } else if (num === 0) {
            return console.log("Zero");
        
        } else {
            return console.log("Negativo");
        
        }
    
    } else {
        console.log("O tipo da variável inserida não é numérico, e sim ", typeof num)
    }
}

var neg = checarNumero(-2);
var pos = checarNumero(3);
var zero = checarNumero(0);
var invalido = checarNumero('Oii');