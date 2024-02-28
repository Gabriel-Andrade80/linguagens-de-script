const verifyTriangle = (A,B,C) => {
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

// console.log(7===7 ? 'sim':'nao')

verifyTriangle(0,0,0)