export const numeroEhPrimo = (numero) => {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if((numero % flag) === 0) divisores++;
    }

    if (divisores > 0) result = false;

    return result
}

export const verifyTriangle = (A,B,C) => {
    if ((A+B) > C && (A+C) > B && (B+C) > A) {
        console.log('é triangulo')
    }
    else {
        console.log('none')
        return
    }


    if (A===B && B===C) {
        console.log('equilátero')
        
    } 
    else if ((A===B ) || A===C || B===C){
        console.log('isóceles')
        return
    }
    else{
        console.log('escaleno')
        return
    }
}


// console.log(numeroEhPrimo(5));

// console.log(verifyTriangle(3,4,5));

export const PI = 3.14

export default numeroEhPrimo
