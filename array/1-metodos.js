const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappem')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adiocionar ou remover
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1= pilotos.slice(2) // gera novo array
console.log(algunsPilotos1)