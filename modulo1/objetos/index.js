//Exercícios de interpretação de código
//1. a) Matheus Nachtergaele - Virginia Cavendish - Globo 14h
//2. a) Nome: Juca Idade: 3 raca: SRD
// Nome: Juba Idade: 3 raca: SRD
// nome: Jubo idade: 3 raca: SRD
//b) copia todas as informações que estão na variavel
//3.a) false ; undefined
//b) o primeiro o valor era false; mas o segundo não tinha uma valor atribuido a altura pode isso foi undefined.

// Exercícios de escrita de código
//1.a)

const pessoa = {
    nome: "Francisco", 
    apelidos: ["Chico", "Chiquinho", "Chicão"]
}
function apelidos1(pessoa){
  
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}.`)
//b)

const novoNome ={...pessoa, apelidos: ["Seu Chico","Chicãozinho"," Chicó"]}

function novosApelidos(pessoa){

}
console.log(`Eu sou ${novoNome.nome}, mas pode me chamar de: ${novoNome.apelidos[0]}, ${novoNome.apelidos[1]}, ${novoNome.apelidos[2]}.`)

//2.
const pessoa1 = {
    nome :"Diego",
    idade:30 ,
    profissao:"estudante"
}
function retorno(pessoa1){

   return pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length
}

//3.
const carrinho = []

const fruta = { 
    nome :"uva",
    disponibilidade : true,
}
const fruta2 = { ...fruta, nome : "banana"}
const fruta3 = { ...fruta2,nome : "ameixa"}


function adicionarFruta(objeto){

    carrinho.push(objeto)
}
adicionarFruta(fruta)
adicionarFruta(fruta2)
adicionarFruta(fruta3)
console.log(carrinho);


// function find_max(nums) {
//     2 let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     3 for (let num of nums) {
//     4 if (num > max_num) {
//     5 // (Fill in the missing line here)
//     6 }
//     7 }
//     8 return max_num;
//     9 }

//     find_max(nums)

//     nums=[1,2,3,4,6,5,8,125,21515,1512]

//     console.log(find_max)