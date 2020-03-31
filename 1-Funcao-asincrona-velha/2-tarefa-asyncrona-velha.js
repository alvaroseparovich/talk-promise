const colors = require('colors')
function fala (t){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}


function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
}


fala('Começada a pandemia'.yellow)

//================================================
// o setTimeout foi renomeado por questao de compreensão
funcaoAntiga(avisoSobreCoronaVirus,3000)

fala('Necessidade de ação'.magenta)

// ============================
// Nova ação, porem intempestiva
fala('COMEÇA A AGIR!!!')

/**
 * Eu só posso começar a tomar ações se eu fui informado!
 * Eu preciso ter uma atitude logo depois do meu aviso, e não antes.
 */