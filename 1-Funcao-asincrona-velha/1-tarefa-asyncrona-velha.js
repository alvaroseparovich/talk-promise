/**
 * Existem hoje Funções Promise e Funções Old Style.
 * As Funções Old Style são funções que seguram CallBacks
 *
 * Exemplo simples de uma função asincrona Old Style.
 */
const colors = require('colors')

function avisoSobreCoronaVirus () {
  console.log('Aviso do corona Chegou'.bgRed)
}

console.log('Começada a pandemia'.yellow)

//================================
// setTimeout é uma função OldStyle
setTimeout(avisoSobreCoronaVirus,3000)

console.log('Necessidade de ação'.magenta)

/**
 * Quando o setTimeout é iniciado (por ser Old Style) ele não consegue
 * retornar informações, pois é uma função segurando outra função!
 *
 * Assim, no momento que chamamos a função asincrona (old style) ela
 * segura a função comum e sai correndo, e não conseguimos recuperar
 * o resultado da função comum, pois a asincrona a pegou e correu.
 */