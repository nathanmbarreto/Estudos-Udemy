// const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel', 'Bruno']

// // aprovados.forEach((nome, indice) => {
// //     aprovados.sort()
// //     console.log(`${indice + 1}: ${nome}`)
// // })

// // aprovados.forEach((nome) => console.log(nome))

// const exibirAprovados = aprovado => console.log(aprovado)

// aprovados.forEach(exibirAprovados)
// --------------------- // ForEach 2---------------------


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel', 'Bruno']

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2((nome, indice) => {
    aprovados.sort()
    console.log(`${indice + 1}: ${nome}`)
})