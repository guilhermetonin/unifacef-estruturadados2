let pass, comps, trocas

function selectionSort(vetor, fnComp) {
    pass = 0; comps = 0; trocas = 0

    for (let posSel = 0; posSel < vetor.length - 1; posSel++) {
        pass++
        let posMenor = posSel + 1

        for (let i = posMenor + 1; i < vetor.length; i++) {
            if (vetor[posMenor] > vetor[i]) {
                posMenor = i
                comps++
            }
        }

        comps++
        if (fnComp( vetor[posSel], vetor[posMenor] ) {
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }
    }
    console.log(`pass: ${pass}, comps: ${comps}, trocas: ${trocas}`)
}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

selectionSort(O)