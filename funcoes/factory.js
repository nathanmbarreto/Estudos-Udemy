// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 45
// }

// // factory simples
// function criarPessoa() {
//     return {
//         nome: 'Ana',
//         sobrenome: 'Silva'
//     }
// }

// console.log(criarPessoa())

// // -------------------------- Factory 2 criando com dados dinamicos

// function criarProduto(nome, preco, desconto = 0.1) {
//     return {
//         nome,
//         preco,
//         desconto
//     }
// }

// console.log(criarProduto('notebook', 2000))


// ------------- Função factory vs Clase

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('João')

// p1.falar()

// const criarPessoa = nome => {
//     return {
//         falar: () => console.log(`meu nome é ${nome}`)
//     }
// }

// const p2 = criarPessoa('José')
// p2.falar()

// -------- Desafio função constrtutora

function Pessoa(nome) {
     this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')

p1.falar()