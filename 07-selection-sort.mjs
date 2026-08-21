import { nomes } from './data/nomes-desord.mjs'

// metricas de desempenho
let pass, comps, trocas

function selectionSort(vetor) {
  pass = 0, comps = 0, trocas = 0

  for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
    pass++
    let posMenor = posSel + 1 // assume o proximo num como menor

    // busca o menor elemento no restante do vetor
    for (let i = posMenor + 1; i < vetor.length; i++) {
      comps++

      if (vetor[posMenor] > vetor[i]) {
        posMenor = i // atualiza o index com o menor num encontrado

      }
    }

    comps++
    if (vetor[posSel] > vetor[posMenor]) {

      [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]]
      trocas++
    }
  }

  console.log(`pass: ${pass}, comps: ${comps}, trocas: ${trocas}`)
}

selectionSort(nomes)
console.log(nomes)