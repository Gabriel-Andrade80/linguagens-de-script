const nome = 'Francisco';
const idade = -19;
const disciplina = 'LS2';

const numeroPrimo = 7;
const ehPrimo = true;

console.log( 7 === '7' );

switch (disciplina) {
    case 'LS':
        console.log('É Linguagens de Script');
        break;
    case 'LM':
        console.log('É Linguagens de Marcação');
        break;
    case 'ED':
        console.log('Estrutura de dados')
        break
    case 'BD':
        console.log('Banco de dados')
        break
    default:
        console.log('disciplina inválida')

}


/*if (idade < 0 || idade > 150) {
    console.log('Idade inváida');
} else {
    if (idade >= 18) {
        console.log(`${nome} é maior de idade`)
    }
    else {
        console.log(`${nome} é menor de idade`)
    }
}*/

if (idade >= 0 && idade <= 150) {
    if (idade >= 18) {
        console.log(`${nome} é maior de idade`)
    }
    else {
        console.log(`${nome} é menor de idade`)
    }
} else {
    console.log('Idade inválida');
}