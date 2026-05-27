// const nums = [1, 2, 3, 4, 5]

// // MAP é for com propósito
// let resultado = nums.map(e => e * 2)

// console.log(resultado)

// const soma10 = e => e + 10
// const triplo = e => e * 3
// const paraDinheoro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// resultado = nums.map(soma10)
//     .map(triplo)
//     .map(paraDinheoro)

// console.log(resultado)

// ------------------- Map 2 Desafio --------------------
// const carrinho = [
//     '{ "nome": "Borracha", "preco": 3.45}',
//     '{ "nome": "Caderno", "preco": 13.90}',
//     '{ "nome": "Kit de Lapis", "preco": 41.22}',
//     '{ "nome": "Caneta", "preco": 7.50}',

// ]

// // Retornar um array apenas com os preços

// //let preco = carrinho.map(e => JSON.parse(e)).map(e => e.preco)



// const paraObjeto = json => JSON.parse(json)
// const apenasValor = produto => produto.preco

// let preco = carrinho.map(paraObjeto).map(apenasValor)
// console.log(preco)

// ------------------- Map 3 implementando --------------------
// Array.prototype.map2 = function (callback) {
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this))
//     }
//     return newArray
// }

// const carrinho = [
//     '{ "nome": "Borracha", "preco": 3.45}',
//     '{ "nome": "Caderno", "preco": 13.90}',
//     '{ "nome": "Kit de Lapis", "preco": 41.22}',
//     '{ "nome": "Caneta", "preco": 7.50}',

// ]

// // Retornar um array apenas com os preços

// let preco = carrinho.map2(e => JSON.parse(e)).map2(e => e.preco)
// console.log(preco)
let alunos = []
class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
        alunos.push(this)
    }
}

let nathan = new Aluno ('Nathan', 10)
let amanda = new Aluno ('Amanda', 1)


let aprovado = []
let reprovado = []

const verifica = aluno => {
    if (aluno.nota >= 6){
        return aprovado.push(aluno)
    } else return reprovado.push(aluno)
}

let notas = alunos.map(verifica)
console.log(aprovado, reprovado)


