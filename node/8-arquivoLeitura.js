const fs = require('fs')

const caminho = __dirname + '/8-arquivo.json'

// sincrono, ou seja, acontece em temo real de forma simultanea
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./8-arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta...')
    console.log(arquivos)
})