const colors = require('colors')
function fala (t){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}



function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
  tomarUmaAtitude()
}

function tomarUmaAtitude () {
  fala('Agora vamos tomar uma Providencia!'.green)
  fala('tomou uma providencia')
  fala()
  // =====================================================================
  // Agora vamos verificar depois de um tempo, se vamos continuar a fazer isso ou parar
  funcaoAntiga(vaiContinuarOuParar,3000)
}

// ================================
// vamos verificra os resultados
function oResultadoFoiPositivo () {
  return parseInt(Math.random()*2)
}

function entaoContinua(){
  fala('Continuando Atividade Anterior'.yellow)
}
function entaoPara(){
  fala('Epaa, vamos parar de fazer isso'.red)
}

function vaiContinuarOuParar () {
  if (oResultadoFoiPositivo()) {
    fala('As atitudes tiveram bons resultados')
    entaoContinua()
  } else {
    fala('As atitudes não tiveram bons resultados')
    entaoPara()
  }
}
fala('Começada a pandemia'.yellow)

funcaoAntiga(avisoSobreCoronaVirus,3000)

fala('Necessidade de ação'.magenta)


/**
 * Perceba o problema, todas as nossas ações estão dentro de uma função aviso.
 * assim qualquer coisa seguinte a este aviso precisa ser levado pela
 * função asincrona velha, por que depois que a função sair correndo
 * ninguem pega ela!
 */