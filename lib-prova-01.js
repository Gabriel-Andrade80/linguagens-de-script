const contaImpares = (...numbers) => {
    let result = 0;
    for (const number of numbers) {
        if (number % 2 !== 0) {
            result++;
        }
    }
    return result;
}

export default contaImpares;
