/*
 Dada a lista de funcionários abaixo, escreva uma função que receba como entrada essa lista e retorne um objeto contendo um resumo dos dados contendo: média salarial, contagem de homens e mulheres, idade mínima e máxima. Não use laços de repetição. Exemplo: 
*/

const funcionarios = [
    'Alice', 40, 'F', 6500,
    'Bruna', 28, 'F', 3000,
    'Carlos', 51, 'M', 6500
]

function resumoDados(listaFuncionarios) {
    let media_salarial = (funcionarios[3] + funcionarios[7] + funcionarios[11])/3

    let contagem_homens = funcionarios.filter((m => m === "M")).length

    let contagem_mulheres = funcionarios.filter((f => f === "F")).length

    let idades = [funcionarios[1], funcionarios[5], funcionarios[9]]

    let idade_minima = Math.min(idades[0], idades[1], idades[2])

    let idade_maxima = Math.max(idades[0], idades[1], idades[2])

    var objeto_informacoes = {
        'idade_min': idade_minima,
        'idade_max': idade_maxima,
        'mulheres': contagem_mulheres,
        'homens': contagem_homens,
        'media_salarial': media_salarial
    }

    return objeto_informacoes

}

console.log(resumoDados(funcionarios))