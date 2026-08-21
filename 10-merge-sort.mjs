function mergeSort(vetor) {

  // se o vetor tiver tamanho 0 ou 1, ja esta ordenado
  if (vetor.length < 2) {
    return vetor
  }

  let meio = Math.floor(vetor.length / 2) // calcula o meio
  let vetLeft = vetor.slice(0, meio) // metade esquerda
  let vetRight = vetor.slice(meio) // metade direita 

  // chamadas recursivas para ordenar cada metade
  vetLeft = mergeSort(vetLeft)
  vetRight = mergeSort(vetRight)

  let posLeft = 0, posRight = 0, vetResult = []

  while (posLeft < vetLeft.length && posRight < vetRight.length) {

    if (vetLeft[posLeft] < vetRight[posRight]) {
      vetResult.push(vetLeft[posLeft])
      posLeft++

    } else {
      vetResult.push(vetRight[posRight])
      posRight++

    }
  }
}

let numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]