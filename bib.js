export const functionalSumOdds = (...params) => {
    // 1. filtrar apenas pelos impares
    const odds = params.filter(
        (element) => {
            return element % 2 !== 0;
        }
    );
    // 2. somar
    const sum = odds.reduce((previous,current) => {
        return previous + current;
    },0)
    return sum
}

export const functionalPrint = (...params) => {
    params.forEach((element) => {
        console.log(`${element}`)
    })
}

