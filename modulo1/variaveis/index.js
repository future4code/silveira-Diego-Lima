/** No console.log (b) será impresso 10
No console.log (a,b) será impresso 10, 5
2 No console.log (a,b,c) será impresso 10,20 e c é variavel undefined
3 Nomes para variaveis em camelCase 
let horasTrabalhadasPorDia
let recebimentoPorDia */

//Exercício 2
const nome = "Diego"
console.log(typeof nome)
const idade = 30
console.log(typeof idade)

/** o comando typeof não informou qual tipo de variavel acho que porque nada foi atribuido */
console.log(nome)
console.log(idade)
/** Apos atribuir valor, os comandos de typeof trazem corretamente o tipo de variavel */
console.log("Olá", nome ,"você tem",idade,"anos",)

let roupaAzul = "Sim"
let roupaVermelha = "Não"
let acordouCedo = "Sim"
console.log("Você esta usando uma roupa azul hoje ?", roupaAzul,) 
console.log("Você esta usando uma roupa vermelha hoje ?", roupaVermelha,)
console.log("Você acordou cedo hoje?", acordouCedo,)


//Exercício 3

let a = 10
let b = 25

c = a;
a = b;
b = c;



console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



