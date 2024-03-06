let vetor = [1,2,3]

// Formas de Inserção
vetor.push(10)
console.log(vetor)

vetor.unshift(2)
console.log(vetor)

vetor.splice(2,0,5,8)
console.log(vetor)

// Formas de remoção
vetor.pop()
console.log(vetor)
vetor.shift()
console.log(vetor)


console.log(vetor.includes(2))

vetor.splice(1,1)

console.log(vetor)

vetor.push(2,1,10,4,6)
console.log(vetor)

// vetor.slice(2,4)

console.log(vetor.slice(2,4))
console.log(vetor)
console.log(vetor.sort())
console.log(vetor)

const mySort = (a,b) => a-b
console.log(vetor.sort(mySort))
console.log(vetor.sort(mySort).reverse())
console.log(vetor)

const multiplos = [1,true,'Teste']
console.log(multiplos.join(', '))
console.log(multiplos[2])




const array1 = [1,2,3,10]
const array2 = [11,12,13,15]

for (let i of array2) {
    console.log(i)
}
const arrayResultante1 = [array1,array1]
const arrayResultante2 = [...array1,...array2]

console.log(arrayResultante1)
console.log(arrayResultante2)


const cmd = 'if'

if (['if','switch'].includes(cmd)) console.log('estrutura de decisao')
