/**
 * Essencialmente, uma promise é um objeto no qual você adiciona callbacks,
 * em vez de passar a callbacks para uma função.
 */


// ===============================
// TODA PROMISE SEGURA UMA FUNÇÃO COM RESOLVE E REJECT
// SEMPRE EM SUCESSO CHAME RESOLVE
// SEMPRE EM FALHA CHAME REJECT
const promeca = new Promise(function(resolve, rejeita){
  resolve('resolveu')
})

console.log(promeca)

/**
 * Como você pode ver no resultado, a promeça não saiu correndo, ela está aguardando você.
 *
 *
 * Por traz dos panos, a promisse é um objeto que passa um metodo próprio para uma função assincrona old style.
 * Mesmo que essa função saia correndo, ao terminar, ela terá que chamar o methodo do objeto Promise,
 * então o Promise salva o resultado e deixa disponivel para ser acessado atravez do metodo 'then'.
 */

// promeca.then(resultado => {
//   console.log(resultado)
// })