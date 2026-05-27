const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // retorna chave e valor em array



Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/20'
})

pessoa.dataNascimento = '01/01'
console.log(pessoa)

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Object.assign incrmentando no ecmas 2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)