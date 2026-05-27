const contadorA = require('./4-instanciaUnica')
const contadorB = require('./4-instanciaUnica')

const contadorC = require('./4-instanciaNova')()
const contadorD = require('./4-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)