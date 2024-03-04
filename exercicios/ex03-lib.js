const areaTriangulo = (raio) => {
    const pi = Math.PI
    const area = pi*(raio**2)
    return area
}

export default areaTriangulo

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