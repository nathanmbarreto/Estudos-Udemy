// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
// }

// const volvo = {
//     modelo: 'V40',
//     velMax: 200
// }

// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__ === Object.prototype)
// console.log(volvo.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

// function meuObjeto() {}
// console.log(typeof Object, typeof meuObjeto)
// console.log(Object.prototype, meuObjeto.prototype)

// ---------------------// ---------------------// ---------------------

//Cadei de protótipo / prototype chain
// Object.prototype.attr0 = '0'
// const avo = { attr1: 'A' }
// const pai = { __proto__: avo, attr2: 'B', attr3: 3 }
// const filho = { __proto__: pai, attr3: 'C' }

// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// const carro = {
//     velAtual: 0,
//     velMax: 200,
//     acelerarMais(delta) {
//         if (this.velAtual + delta <= this.velMax) {
//             this.velAtual += delta
//         } else {
//             this.velAtual = this.velMax
//         }
//     },
//     status() {
//         return `${this.velAtual}Km/h de ${this.velMax} Km/h`
//     }
// }

// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
// }

// const volvo = {
//     modelo: 'V40',
//     status() {
//         return `${this.modelo}: ${super.status()}`
//     }
// }

// Object.setPrototypeOf(ferrari, carro)
// Object.setPrototypeOf(volvo, carro)

// console.log(ferrari)
// console.log(volvo)

// volvo.acelerarMais(100)
// console.log(volvo.status())

// ferrari.acelerarMais(2030)
// console.log(ferrari.status())

// ---------------------// ---------------------// ---------------------

// const pai = { nome: 'Pedro', corCabelo: 'preto' }
// const filha1 = Object.create(pai)
// filha1.nome = 'Ana'
// console.log(filha1.corCabelo)

// const filha2 = Object.create(pai,{
//     nome: {value: 'Bia', writable: false, enumerable: true}
// })

// console.log(filha2.nome)
// filha2.nome = 'Carla'
// console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// console.log(Object.keys(filha1))
// console.log(Object.keys(filha2))

// for(let key in filha2){
//     filha2.hasOwnProperty(key) ?
//         console.log(key) : console.log(`Por herança ${key}`)
// }

// ---------------------// ---------------------// ---------------------

// function MeuObjeto() {
//     console.log(MeuObjeto.prototype)
// }

// const obj1 = new MeuObjeto
// const obj2 = new MeuObjeto

// console.log(obj1.__proto__ === obj2.__proto__)
// console.log(MeuObjeto.prototype === obj1.__proto__)

// MeuObjeto.prototype.nome = 'Anonimo'
// MeuObjeto.prototype.falar = function () {
//     console.log(`Bom dia, meu nome é ${this.nome}`)
// }

// obj1.falar()

// obj2.nome = 'Rafael'
// obj2.falar()

// const obj3 = {}
// obj3.__proto__ = MeuObjeto.prototype
// obj3.nome = 'Obj3'

// obj3.falar()

// // Resumo
// console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
// console.log(MeuObjeto.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

// ---------------------// ---------------------// ---------------------

// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)

// String.prototype.reverse = function () {
//     return this.split('').reverse().join('')
// }

// console.log('Escola Coder'.reverse())

// Array.prototype.first = function () {
//     return this[0]
// }

// console.log([1, 2, 3, 4, 5].first())
// console.log(['a', 'b', 'c'].first())

// ---------------------// ---------------------// ---------------------

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o perador new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até mias', 456)

console.log(aula3, aula4)