// const valor = 'Global'
// function minhaFuncao() {
//     console.log(valor)
// }

// function exec() {
//     const valor = 'Local'
//     minhaFuncao()
// }

// exec()

// a função tem conciencia de onde é declarada

// CLOSURE é o escopo criado quando uma função é declarada
// Escopo permite que a função acesse e manipule variaveis externas à função
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunc = fora()
console.log(minhaFunc())