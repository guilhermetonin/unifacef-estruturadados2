// importa o vetor de objetos
import { objNomes } from './data/vetor-obj-nomes.mjs'

function buscaSequencial(vetor, fnComp) {
  for (let i = 0; i < vetor.length; i++) {
    if (fnComp(vetor[i])) return i // retorna o index
  }
  return -1 // nao encontrado
}

// verifica se no objeto o first_name é 'ALEXANDRE'
function comparaNome(obj) {
  return obj.first_name === 'ALEXANDRE'
}

console.log("Posição de 'ALEXANDRE' = " + buscaSequencial(objNomes, comparaNome))