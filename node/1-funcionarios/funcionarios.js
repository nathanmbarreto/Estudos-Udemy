const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // cliente http

axios.get(url).then(response => {
    const funcionarios = response.data
    const chineses = f => f.pais === 'China'
    const genero = f => f.genero === 'F'
    const menorSalario = ((func, funcAtual) => {
        return funcAtual.salario < func.salario ? funcAtual : func
    })

    let mulher = funcionarios
        .filter(chineses)
        .filter(genero)
        .reduce(menorSalario)

    console.log(mulher)


})

// Buscar a mulher chinesa com o maior salário

