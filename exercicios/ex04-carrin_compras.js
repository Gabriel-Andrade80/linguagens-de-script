const vetor = [
    {'id':1,'preço':10,'qtde':2},
    {'id':2,'preço':10,'qtde':2},
    {'id':3,'preço':10,'qtde':2},
    {'id':4,'preço':10,'qtde':0}
]

const functional = (vetor) => {
    let result = 0
    vetor.forEach( (element) => {
        result += element['preço'] * element['qtde']
    })
    return result
}

console.log (functional(vetor))

// const mapVetor = (vetor) => {
//     const result = vetor.map(element => {
//         console.log(element + element['preço'] * element['qtde'])

//         element = element['preço'] * element['qtde']
//     })
//     console.log(result)
//     return result.reduce((previous,current) => {
//         previous + current
//     },0)
// }

// console.log (mapVetor(vetor))