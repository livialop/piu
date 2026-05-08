/*
Reescreva o programa da questão Q4 com funções específicas de validação para cada campo (validarNome, validarIdade, validarFoiADisney).  
Caso um valor seja inválido, lance uma exceção dentro da própria função de validação (use throw).
*/

function validarNome(nome) {
    if (typeof nome != "string") {
        throw "O nome deve ser uma string."
    }
}

function validarIdade(idade) {
    if (typeof idade != "number") {
        throw "A idade precisa ser um número."
    } else if (Number.isInteger(idade) != true) {
        throw "A idade precisa ser um número inteiro."
    }
}

function validarFoiADisney(foiADisney) {
    if (typeof foiADisney != "boolean") {
        throw "Essa informação precisa ser true/false."
    }
}

function dadosPessoais(nome, idade, jaFoiADisney) {
    validarNome(nome)
    validarIdade(idade)
    validarFoiADisney(jaFoiADisney)
    let dados = {"nome": nome, "idade": idade, "JaFoiPDisney": jaFoiADisney}
    return JSON.stringify(dados)
}

//var meusDados = dadosPessoais(19, 19, false)
//console.log(meusDados)


// var meusDados = dadosPessoais("livia", 19.9, false)
// console.log(meusDados)


var meusDados = dadosPessoais("livia", 19, 'nunca')
console.log(meusDados)