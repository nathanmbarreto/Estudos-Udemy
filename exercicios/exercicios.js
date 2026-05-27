// ----------------------------------- Exercicio 01 ----------------------------------- 
// const saudacao = function (nome) {
//     console.log(`Olá, ${nome}!`)
// }

// saudacao('Maria')

// ----------------------------------- Exercicio 02 ----------------------------------- 

// const idadeEmDias = function (idade){
//     return idade * 365
// }
// console.log(idadeEmDias(70))

// ----------------------------------- Exercicio 03 ----------------------------------- 

// function calculaSalario(qtdHoras, valorHoras){
//     return qtdHoras * valorHoras
// }

// console.log(calculaSalario(150, 40.5))

// ----------------------------------- Exercicio 04 ----------------------------------- 
// function verificaMes (mes){
//     if(mes === 1){
//         return 'Janeiro'
//     } else if (mes === 2){
//         return 'Fevereiro'
//     } else if(mes === 3){
//         return ' Março'
//     } else if(mes === 4){
//         return 'Abril'
//     } else if(mes === 5){
//         return 'Maio'
//     } else if(mes === 6){
//         return 'Junho'
//     } else if(mes === 7){
//         return 'Julho'
//     } else if(mes === 8){
//         return 'Agosto'
//     } else if(mes === 9){
//         return 'Setembro'
//     } else if(mes === 10){
//         return 'Outubro'
//     } else if(mes === 11){
//         return 'Novembro'
//     } else if(mes === 12){
//         return 'Dezembro'
//     } else return 'Valor invalido'
// }
// console.log(verificaMes(12))
// ----------------------------------- Exercicio 05 ----------------------------------- 

// const inverso = function(valor){
//     if (valor === true){
//         return false
//     } else if (valor ===false){
//         return true
//     } else if(typeof valor === 'number'){
//         return valor * -1
//     } else { return 'Valor numerico ou booleano esperados'}
// }

// console.log(inverso(12))

// ----------------------------------- Exercicio 06 ----------------------------------- 
// const estaEntre = function (num, min, max, inclusivo = false) {
//     if ((num >= min && num <= max) && inclusivo === true){
//         return true
//     } else if ((num > min && num < max) && inclusivo === false){
//         return true
//     } else return false
// }

// console.log(estaEntre(10, 5,100))
// console.log(estaEntre(16, 100, 160))
// console.log(estaEntre(3, 3, 150))
// console.log(estaEntre(3, 3, 150, true))
// ----------------------------------- Exercicio 07 ----------------------------------- 
// function multiplica(num1, num2) {
//     let resultado = 0
//     if (num1 >= 0 && num2 >= 0) {
//         for (let i = 0; i < num2; i++) {
//             resultado += num1
//         }
//     }
//     return resultado
// }

// console.log(multiplica(10, 5))

// ----------------------------------- Exercicio 08 ----------------------------------- 

// const repetir = function (elemento, quantidade) {
//     let meuArray = []
//     for (let i = 0; i < quantidade; i++) {
//         meuArray.push(elemento)
//     }
//     return meuArray
// }
// console.log(repetir(7, 7))
// ----------------------------------- Exercicio 09 ----------------------------------- 
// const simboloMais = function (quantidade) {
//     let resultado=''
//     for (let i = 1; i <= quantidade; i++) {
//         resultado += '+'
//     }
//     return resultado
// }

// console.log(simboloMais(3))
// ----------------------------------- Exercicio 10 ----------------------------------- 
// const primeiroEultimoElemento = function (meuArray) {
//     return [meuArray[0], meuArray[meuArray.length - 1]]
// }

// console.log(primeiroEultimoElemento([7, 14, 'olá']))
// console.log(primeiroEultimoElemento([-100, 'aplicativo', 16]))