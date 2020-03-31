/**
 * Abaixo temos um exemplo de como resolver o problema das funções old Style
 * Porém como nossa função saiu correndo, eu darei uma outra tarefa para ela,
 * para que ela execute logo em seguida.
 */
const colors = require('colors')
function fala (t){console.log(t)}
function funcaoAntiga (f, t) {setTimeout(f,t)}

// ======================================================
// nosso aviso receberá uma nova atividade, TOMAR UMA ATITUDE!
function avisoSobreCoronaVirus () {
  fala('Aviso: A doença corona Chegou'.bgRed)
  tomarUmaAtitude()
}

function tomarUmaAtitude () {
  fala('Agora vamos tomar uma Providencia!'.green)
}


fala('Começada a pandemia'.yellow)

funcaoAntiga(avisoSobreCoronaVirus,3000)

fala('Necessidade de ação'.magenta)