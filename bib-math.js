const numeroEhPrimo = (numero) => {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if((numero % flag) === 0) divisores++;
    }

    if (divisores > 0) result = false;

    return result
}
export default numeroEhPrimo;

const somatorio = (...variaveis) => {
    console.log(variaveis)
    for(const v in variaveis) {
        console.log(variaveis[v])
    }
}

somatorio(2,3,8,10,15)