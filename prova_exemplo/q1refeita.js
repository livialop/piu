/*
 Dada a lista de funcionários abaixo, escreva uma função que receba como entrada essa lista e retorne um objeto contendo um resumo dos dados contendo: média salarial, contagem de homens e mulheres, idade mínima e máxima. Não use laços de repetição. Exemplo: 
*/

const funcionarios = [
    {
        nome: 'Alice', 
        idade: 40, 
        genero: 'F', 
        salario: 6500
    },
    {
        nome: 'Bruna', 
        idade: 28, 
        genero: 'F', 
        salario: 3000
    },
    {
        nome: 'Carlos', 
        idade: 51, 
        genero: 'M', 
        salario: 6500
    }
]

function resumoDados(listaFuncionarios) {
    let resumo = listaFuncionarios.reduce(
        (lista, funcionario) => {
            if ((lista.idade_min == 0) || (lista.idade_min > funcionario.idade)) {
                lista.idade_min = funcionario.idade;
            } if ((lista.idade_max == 0) || (lista.idade_max < funcionario.idade)) {
                lista.idade_max = funcionario.idade;
            } if (funcionario.genero === 'F') {
                lista.mulheres ++;
            } if (funcionario.genero === 'M') {
                lista.homens ++;
            } 
            lista.media_salarial += (funcionario.salario) / listaFuncionarios.length
            return lista 
        },
        
        {
            idade_min: 0,
            idade_max: 0,
            mulheres: 0,
            homens: 0,
            media_salarial: 0
        }
    )

    return resumo

}

console.log(resumoDados(funcionarios))

// mais ex de reduce

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const grouped = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user.name);
  return acc;
}, {});

console.log(grouped); 

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10