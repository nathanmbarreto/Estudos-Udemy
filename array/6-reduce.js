const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 10)

// console.log(resultado)

// -------------//

// const todosBolsista = (resultado, bolsista) => resultado && bolsista
// console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsista))

// const algumBolsista = (resultado, bolsista) => resultado || bolsista
// console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))

// //// -------------//

Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))