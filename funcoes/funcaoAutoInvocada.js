// principais funcções, no browser quando quiser fugir do global
// IIFE > immeditely invoked function expression

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!')
})()