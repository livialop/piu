funcionarios = [
    { nome: 'Lívia', idade: 20, genero: 'F', salario: 6000 },
    { nome: 'Gabriel', idade: 19, genero: 'M', salario: 3000 },
    { nome: 'Ana Clara', idade: 18, genero: 'F', salario: 4500}
]

let resumo = funcionarios.reduce(
    function(informacoes, funcionario) {
        if (funcionario.genero == 'F') {
            informacoes.mulheres++;
            
        } if (funcionario.genero == 'M') {
            informacoes.homens++;

        } if (funcionario.idade < informacoes.idade_min) {
            informacoes.idade_min = funcionario.idade;

        } if (funcionario.idade > informacoes.idade_max) {
            informacoes.idade_max = funcionario.idade;

        } 

        informacoes.media_salarial += funcionario.salario / funcionarios.length
        
        return informacoes
    },
    {
        mulheres: 0,
        homens: 0,
        media_salarial: 0,
        idade_min: Infinity,
        idade_max: 0
    }
)

console.log(resumo)