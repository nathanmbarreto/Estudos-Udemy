// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

// const calculaValor = function (num1, num2) {
//     let soma = num1 + num2
//     let subtracao = num1 - num2
//     let multiplicacao = num1 * num2
//     let divisao = num1 / num2

//     console.log(`Resultado das expreções dos numero ${num1} e ${num2}:`)
//     console.log(`Soma: ${soma}`)
//     console.log(`Subtração: ${subtracao}`)
//     console.log(`Multiplicação: ${multiplicacao}`)
//     console.log(`Divisão: ${divisao}`)
// }

// calculaValor(10, 2)

//------------------------------------------------//------------------------------------------------

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

// const triang = function(lado1, lado2, lado3){
//     if ((lado1 === lado2) && (lado2 === lado3)){
//         console.log('Este é um triangulo Equilátero')
//     } else if(((lado1 === lado2) && (lado2 != lado3)) || ((lado1 === lado3) && (lado2 != lado3))){
//         console.log('Este é um triangulo Isósceles')
//     }else if(((lado1 != lado2) && (lado2 != lado3))){
//         console.log('Este é um triangulo Escaleno')
//     }
// }

// triang(2,2,2)
// triang(2,2,3)
// triang(1,2,3)

//------------------------------------------------//------------------------------------------------

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
// const calc = (base, expoente) => base ** expoente
// console.log(calc(2, 3))

const words = ['apple', 'banana', 'grape', 'apple']

console.log(new Set(words).size !== words.length)