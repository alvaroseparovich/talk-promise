/**
 * PEGA na Promise
 */

const colors = require('colors')
function fala (t=''){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}

function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
}
function tomarUmaAtitude () {
  fala('Agora vamos tomar uma Providencia!'.green)
  fala('tomou uma providencia')
  fala()
}
function oResultadoFoiPositivo () {return parseInt(Math.random()*2)}
function entaoContinua(){fala('Continuando Atividade Anterior'.yellow)}
function entaoPara(){fala('Epaa, vamos parar de fazer isso'.red)}
function vaiContinuarOuParar () {
  if (oResultadoFoiPositivo()) { fala('As atitudes tiveram bons resultados');entaoContinua()}
  else { fala('As atitudes não tiveram bons resultados');entaoPara()}
}


// --------------------------------------


fala('Começada a pandemia'.yellow)

const promeca = new Promise((resolve,reject)=>{
  return funcaoAntiga(()=>{
    resolve()
  },3000)
})

promeca.then(()=>{
  avisoSobreCoronaVirus()
  tomarUmaAtitude()

  return new Promise((resolve,rejeita)=>{
    funcaoAntiga(()=>{resolve()},3000)
  })
})
.then(()=>{
  vaiContinuarOuParar()
})

fala('Necessidade de ação'.magenta)

/**
 * agora estamos novamente tomando providencias porém com cada função em seu lugar
 */