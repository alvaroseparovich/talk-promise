/**
 * =====================================================
 * Vou ja pressupor que todos usam async await.
 *
 * Por traz dos panos TODA ASYNC FUNCTION É UMA FUNÇÃO OLD
 * STYLE E SAI CORRENDO MAS RETORNA UMA PROMISE!!!
 *
 * E TODO O AWAIT É UM RETURN, QUE VAI PARA UM THEN, QUE AGORA
 * É UMA VARIAVEL!!!
 *
 * LOGO TODO O AWAIT PRECISA ESTAR DENTRO DE UMA ASYNC
 * FUNCTION PORQUE NA VERDADE ELA É UMA PROMISE!!!
 * =====================================================
 */
const fetch = require('node-fetch')
const colors = require('colors')

//============================
//ISSO É O MESMO
async function funcaoUm () {
  const result = await fetch('https://google.com.br')
  console.log(result.status)
  return result.url
}
funcaoUm()

// =========================
// QUE ISSO
fetch('https://google.com.br')
.then(result=>{
  console.log(result.status)
  return result.url})

// =========================
// TANTO QUE

console.log('TRECHO SINCRONO'.bgRed)

funcaoUm()
.then(alimento=>{console.log(alimento)})

fetch('https://google.com.br')
.then(result=>{
  console.log(result.status)
  return result.url})
.then(alimento=>{console.log(alimento)})
