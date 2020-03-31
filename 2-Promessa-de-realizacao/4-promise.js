// const colors = require('colors')
// function fala (t=''){console.log(t)}
// function funcaoAntiga (f, t) {setTimeout(f,t)}

// function avisoSobreCoronaVirus () {
//   fala('Aviso: A doença corona Chegou'.bgRed)
// }
// function tomarUmaAtitude () {
//   fala('Agora vamos tomar uma Providencia!'.green)
//   fala('tomou uma providencia')
//   fala()
// }
// function oResultadoFoiPositivo () {return parseInt(Math.random()*2)}
// function entaoContinua(){fala('Continuando Atividade Anterior'.yellow)}
// function entaoPara(){fala('Epaa, vamos parar de fazer isso'.red)}

// // ======================================================
// // AGORA QUANDO DER ERRO INTERROMPO A TAREFA COM UM ERRO
// function vaiContinuarOuParar (atividadeFeita) {
//   if (oResultadoFoiPositivo()) { fala('As atitudes tiveram bons resultados');entaoContinua()}
//   else {
//     fala('As atitudes não tiveram bons resultados');entaoPara();
//     throw atividadeFeita
//   }
// }


// // --------------------------------------


// fala('Começada a pandemia'.yellow)

// const promeca = new Promise((resolve,reject)=>{
//   return funcaoAntiga(()=>{
//     resolve()
//   },3000)
// })


// // =========================================================
// // AGORA EM NOS FINAIS DE CADA THEN RETORNAMOS UM VALOR PARA O PROXIMO THEN
// // RETIRAMOS O SEGUNDO TIMER, POREM COMEÇAMOS A PASSAR VARIAVEIS DE UM THEN PARA OUTRO
// promeca.then(()=>{
//   avisoSobreCoronaVirus()
//   tomarUmaAtitude()
//   return 'Comprar todo papel higiênico '
// })
// .then((atitude)=>{
//   vaiContinuarOuParar(atitude)
//   return atitude
// })
// .then(boaAtitude=>{
//   console.log(boaAtitude + 'diminuiu o avanço do corona')
// })
// .catch(erro=>{console.log(erro + 'não mudou nada :(')})

// fala('Necessidade de ação'.magenta)

/**
 * agora estamos novamente tomando providencias porém com cada função em seu lugar.
 *
 * ===========================================
 * Os argumentos para o metodo 'then' são opcionais, e catch(failureCallback) é uma abreviação para then(null, failureCallback).
 *
 * O node ja disponibiliza a blioteca util com a função promisify
 * one ela ja faz o encapsulamento de uma função Old Style em uma promessa
 * ===============
 */
