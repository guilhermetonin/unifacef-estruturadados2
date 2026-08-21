function bubbleSort(vetor) {
  let swap

  do {
    swap = false // inicializa como false a cada nova passada

    // percorre ate o penultimo elemento
    for (let i = 0; i < vetor.length - 1; i++) {

      if (vetor[i] > vetor[i + 1]) {
        // inverte
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
        swap = true // sinaliza que houve troca
      }
    }

  } while (swap) // continua se for true
}

let numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
console.log("\nVetor Sem Ordenação: " + numeros)

bubbleSort(numeros)
console.log("\nApós BubbleSort: " + numeros)