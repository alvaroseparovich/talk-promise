/**
 * ==================
 * CÓDIGO ANTIGO - apenas ler
 * ==================
 */
const colors = require('colors')
function fala (t){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}

// ============================================================
// esta função alem de avisar (como é seu nome) tambem toma uma atitude
function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
  tomarUmaAtitude()
}

// ===========================================================
// esta função alem de tomar uma providencia tambem aguarda a proxima tarefa
function tomarUmaAtitude () {
  fala('Agora vamos tomar uma Providencia!'.green)
  fala('tomou uma providencia')
  fala()
  funcaoAntiga(vaiContinuarOuParar,3000)
}
function oResultadoFoiPositivo () {return parseInt(Math.random()*2)}
function entaoContinua(){fala('Continuando Atividade Anterior'.yellow)}
function entaoPara(){fala('Epaa, vamos parar de fazer isso'.red)}
function vaiContinuarOuParar () {
  if (oResultadoFoiPositivo()) { fala('As atitudes tiveram bons resultados');entaoContinua()}
  else { fala('As atitudes tiveram bons resultados');entaoPara()}
}

fala('Começada a pandemia'.yellow)

funcaoAntiga(avisoSobreCoronaVirus,3000)

fala('Necessidade de ação'.magenta)


/**
 * COMENTAR CODIGO ACIMA, E LER E RODAR O CÓDIGO ABAIXO
 */
/**
 * se Correr o then pega,
 * se dropar o catch come
 */

const colors = require('colors')
function fala (t=''){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}

// ============================================================
// AGORA ESTA FUNÇÃO REALMENTE SÓ FAZ AQUILO QUE DIZ QUE FARIA
function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
}

// ===========================================================
// ESTA FUNÇÃO AQUI TMB, SÒ FAZ O PLANEJADO
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


fala('Começada a pandemia'.yellow)


// AGORA AO INVES DE DEIXAR A FUNÇÃO CORRER, VOU USAR UM OBJETO PROMISE PARA CONTROLAR
const promeca = new Promise((resolve,reject)=>{
  return funcaoAntiga(()=>{
    resolve()
  },3000)
})
// ASSIM QUE A FUNÇÃO ANTIGA FOR DISPARADA, O SEU RESULTADO ENTRARÁ NO OBJETO PROMISE
// E FICARÁ AGUARDANDO PARA SER PASSADO PELO METODO 'THEN'
promeca.then(()=>{
  avisoSobreCoronaVirus()
  tomarUmaAtitude()
})

fala('Necessidade de ação'.magenta)

/**
 * agora estamos novamente tomando providencias porém com cada função em seu lugar
 */