// const produtos = [
//     { nome: 'Notebook', preco: 2499, fragil: true},
//     { nome: 'Ipad Pro', preco: 4199, fragil: true},
//     { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
//     { nome: 'Copo de plastico', preco: 18.99, fragil: false}
// ]

// // console.log(produtos.filter(produto => true))
// // console.log(produtos.filter(produto => false))
// // console.log(produtos.filter(produto => produto.preco > 2500))

// const precoMinimo = produto => produto.preco >= 500
// const verificaFragil = produto => produto.fragil

// let resultado = produtos.filter(precoMinimo).filter(verificaFragil)

// console.log(resultado)

// ---------------- Implementando filter
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(produto => true))
// console.log(produtos.filter(produto => false))
// console.log(produtos.filter(produto => produto.preco > 2500))

const precoMinimo = produto => produto.preco >= 500
const verificaFragil = produto => produto.fragil

let resultado = produtos.map(precoMinimo).map(verificaFragil)

console.log(resultado)