const numero = 7;
let divisores = 0;
for (let i = 2; i < numero; i++){
    if(numero % i === 0){
        divisores++
    }
}

if (divisores > 0) {
    console.log('Nao é primo');
}else {
    console.log('é primo')
}

let flag = 2
do{
    if(numero % flag === 0) divisores++;
    flag++
} while(flag < numero);

if(divisores > 0 )
    console.log('Nao é primo')
else
    console.log('é primo')

const numeroEhPrimo = (numero) => {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if((numero % flag) === 0) divisores++;
    }

    if (divisores > 0) result = false;

    return result
}


let lista = []
for (i = 2;i <= 50; i++){
    if (numeroEhPrimo(i)){
        lista.push(i)
    }
}


lista.forEach((element) => {
    console.log(`${element}`)
})