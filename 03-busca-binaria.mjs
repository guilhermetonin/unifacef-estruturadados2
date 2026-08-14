function buscaBinaria(vetor, valorBusca) {
    let ini = 0  // num primeiro index
    let fim = vetor.length - 1 // num ultimo index

    while (fim >= ini) {
        // Math.floor traz o número inteiro
        let meio = Math.floor((ini + fim) / 2)

        if (valorBusca === vetor[meio]) return meio

        if (valorBusca > meio) {
            ini = meio + 1
        } else {
            fim = meio - 1
        }
    }
}

let numeros = [0,11,22,33,44,55,66,77,88,99]

console.log(`Posição de '99' ${buscaBinaria(numeros, 99)}`)
console.log(`Posição de '11' ${buscaBinaria(numeros, 99)}`)
console.log(`Posição de '22' ${buscaBinaria(numeros, 99)}`)

import {nomes} from "./data/vetor-obj-nomes.mjs"


console.log (`Posição de 'ALEXANDRE': ${buscaBinaria(nomes, "ALEXANDRE")}`)