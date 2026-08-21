import { objNomes } from "./data/vetor-obj-nomes.mjs"

function buscaBinaria(vetor, valorBusca) {
  let ini = 0 // numero primeiro index
  let fim = vetor.length - 1 // numero ultimo index

  while (fim >= ini) {
    let meio = Math.floor((ini + fim) / 2) // index do meio arrendondado

    if (valorBusca === vetor[meio]) return meio // esta exatamente no meio

    // descarta a metade irrelevante
    if (valorBusca > vetor[meio]) {
      ini = meio + 1 // direita
    } else {
      fim = meio - 1 // esquerda
    }
  }

  return -1 // nao encontrado
}

let numeros = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log(`Posição de '99': ${buscaBinaria(numeros, 99)}`)
console.log(`Posição de '11': ${buscaBinaria(numeros, 11)}`)
console.log(`Posição de '22': ${buscaBinaria(numeros, 22)}`)
console.log(`Posição de '50': ${buscaBinaria(numeros, 50)}`)