const str1 = "String";
const str2 = 'String 2'
const str3 = String("String 3")

// console.log(str1)
// console.log(str2)
// console.log(str3)

const strTemplateLiterals = `String 4`
console.log(typeof strTemplateLiterals)
console.log(strTemplateLiterals)

const nome = 'Francisco';
const idade = 37
const email = "dantas.sagomdkgsd@gmail.com"

console.log(`Info usuários: ${nome}, ${idade}, ${email}`);

const htmlImg = "<img src=\"./imagem/avatar.png\" alt=\"Avatar da pessoa\">"

console.log(htmlImg)
console.log(htmlImg.length)

// console.log('vitoria do vascudo '.repeat(5));

// console.log('IFPB'.toLowerCase().includes('f'));

// console.log('IFPB'.toUpperCase());

// console.log('IFPB'.startsWith('IFP'));
// console.log('IFPB'.endsWith('PB'));

// console.log('Linguagens de Scripts'.replace(/i/gi, '1'));

// console.log('Linguagens de Script\''.search('ns'));
// console.log('      OLá, Mundo!     '.trim())
// console.log('      OLá, Mundo!     '.trimEnd())
// console.log('      OLá, Mundo!     '.trimStart())
// console.log('10'.padStart(5,'0'))
// const valor = '4,10'
// console.log(valor.padStart(valor.length + 1, '0'))

console.log('Linguagens de Script'.substring(5));
console.log('Linguagensss de Script'.slice(-6));

console.log('Linguagens de Script'.split('s'));