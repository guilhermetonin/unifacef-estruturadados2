function bubbleSort(vetor) {

    let swap

    do {
        swap = false

        for (let i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i+1]) {
                [ vetor[i], vetor[i+1] ] = [ vetor[i+1], vetor[i] ] 
                swap = true
            }
        }

    } while (swap)

}

let numeros = [77,44,22,33,99,55,88,0,66,11]
console.log("\nVetor Sem Ordenação: " + numeros)

bubbleSort(numeros)
console.log("\nApós BubbleSort: " + numeros)
