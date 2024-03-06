const sum = (...params) => {
    let sum = 0

    params.forEach((element) => {
        sum += element
    })

    return sum
}

console.log(sum(1,2,3))
console.log(sum(2,2,2))
console.log(sum(1,2,3,4,5,6))

const sumOdds = (...params) => {
    let sum = 0
    params.forEach((element) => {
        if (element % 2 !== 0) {
            sum += element
        }
    })
    return sum
}

console.log(sumOdds(1,2,3))
console.log(sumOdds(2,2,2))
console.log(sumOdds(1,2,3,4,5,6))


const product = (...params) => {
    let result = 1
    params.forEach((element) => {
        result *= element
    })
    return result
}

console.log(product(1,2,3))
console.log(product(2,2,2))
console.log(product(1,2,3,4,5,6))
