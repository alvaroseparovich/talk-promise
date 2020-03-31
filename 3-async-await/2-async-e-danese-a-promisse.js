
/**
 * =======================================
 * ASSIM SE VC DA UM AWAIT EM UMA PROMISE QUE TEM THEN OU CATCH
 * NA VERDADE VC APENAS COLOCOU UM THEN DEPOIS DELA, E TODO SEU CÓDIGO
 * DEPOIS DAQUELE AWAIT, ESTA DENTRO DE UM METODO THEN.
 *
 * POR ISSO OS CÓDIGOS ABAIXO SÃO 3 FORMAS DE ESCREVER A MESMA E EXATA COISA
 * ======================================
 */

const fetch = require('node-fetch')
const colors = require('colors')


fetch('https://google.com.br')
.then(result => {
  fetch('https://google.com.br')
  .then(resulta=>{
    console.log(resulta.status)
    return 'a'
    }
  )
  .then(resultado=>{console.log(resultado)})
})

async function funcaoDois () {
  const result = await fetch('https://google.com.br')
  const resultado = await fetch('https://google.com.br')
  .then(resulta=>{
    console.log(resulta.status)
    return 'a'
    }
  )
  console.log(resultado)
}
funcaoDois()

async function funcaoTres () {
  const result = await fetch('https://google.com.br')
  const resulta = await fetch('https://google.com.br')
  console.log(resulta.status)
  const resultado = 'a'
  console.log(resultado)
}
funcaoTres()
