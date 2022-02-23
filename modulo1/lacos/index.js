//Exercícios de interpretação de código
//1. esta realizando um loop até quando i for <5. console.log(4)

//2.a) [19,21,23,25,27,30]
//b) Sim. teria que mudar o if(numero >0) e todos os numeros aparacerão no console.

//3. console.log(****)

//Exercícios de escrita de código
//1.


let nomesAnimais =[]

const quantosAnimais = Number(prompt("Quantos bichinhos de estimação você tem ?"))

if (quantosAnimais === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
else if (quantosAnimais > 0) {
let i = 0
while(i < quantosAnimais){
    nomesAnimais.push(prompt("Digite os nomes dos bichinhos"))
        i++;
}
console.log(nomesAnimais)
}
//Exercicio 2.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//resposta da A
let i = 0
while (i < arrayOriginal.length){
    console.log(arrayOriginal[0])
    i++;
}
