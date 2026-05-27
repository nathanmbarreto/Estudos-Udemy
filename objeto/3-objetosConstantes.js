// pessoa aponta para um endereço de memoria. Na memoria aponta para o objeto
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // o endereço apontado na memória segue o mesmo


// Pessoa vai receber um novo objeto no mesmo endereço
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)