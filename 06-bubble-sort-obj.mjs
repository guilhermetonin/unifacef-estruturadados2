import { objMotoristas } from "./data/motoristas-obj-desord.mjs"

// metricas de desempenho
let pass, comps, trocas

function bubbleSort(vetor, fnComp) {
  pass = 0, comps = 0, trocas = 0
  let swap

  do {
    pass++
    swap = false

    for (let i = 0; i < vetor.length - 1; i++) {
      comps++ // registra 1+ comparacao

      if (fnComp(vetor[i], vetor[i + 1])) {

        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
        swap = true

        trocas++ // registra 1+ troca
      }
    }

  } while (swap)
}

bubbleSort(objMotoristas, (elem1, elem2) =>
  elem1.nome_motorista > elem2.nome_motorista
)

console.log(objMotoristas)
console.log({ pass, comps, trocas })