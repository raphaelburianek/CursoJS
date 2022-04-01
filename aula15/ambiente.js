let num = [8, 5, 9]

num[3] = 6

num.push(7)
num.sort()
console.log(num)

/*console.log(`nosso vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)*/

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/


for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(1)

console.log(`${pos}`)