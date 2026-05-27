// Object.preventExtensions proibe o aumento de  atributos chaves ou valores

// const produto = Object.preventExtensions({
//     nome: 'Qualquer', preco: 1.99, tag: 'promoção'
// })

// console.log('Extensivel:', Object.isExtensible(produto))
// produto.nome = 'Borracha'
// produto.descricao = 'Borracha branca escolar'
// delete produto.tag
// console.log(produto)

// // Object.seal você nao pode adicionar ou remover, mas consegue alterar os atributos
// const pessoa = { nome: 'Juliana', idade: 35}
// Object.seal(pessoa)
// console.log('Selado:', Object.isSealed(pessoa))

// pessoa.sobrenome = 'Silva'
// delete pessoa.nome
// pessoa.idade = 29

// console.log(pessoa)

// // Object.freeze = selado + valores constantes


// let arr = [{ "nome": "Carlos", "idade": 30 }, { "nome": "Rebeca", "idade": 25 }, { "nome": "Zenon", "idade": 2 }]
// let atributo = "nome"


// const verifica = arr.sort((a, b) => a[atributo] - b[atributo])

// console.log(verifica)

// let obj = { "a": 1, "b": 2, "c": 3 }
// let remover = "a"

// delete obj[remover]

// console.log(obj)


// let obj = { "nome": "Ana", "idade": 22}
// let chave = "nome"

// console.log(JSON.stringify(obj[chave]))

let num1 = [1, 2, 2, 3, 4, 5]
let num2 = [2, 4, 6]
let resultado = []
for (num of num1) {
    for (let i = 0; i < num2.length; i++) {
        if (num2[i] === num) {
            resultado.push(num2[i])
        }
    }
}
resultado.reduce
    
 

console.log(resultado)