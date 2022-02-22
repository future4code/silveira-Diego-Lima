/**  Exercícios de interpretação de código
//1.a) O codigo verifica se o numero informado é divisivel por 2 e com resto 0
b) numeros pares vão passar no teste.
c) numeros impares não irão passar no teste

2.a)O codigo serve para informar o preço da fruta.
b) O preço da fruta maça é R$ 2.25
c) O preço da fruta pêra é R$ 5.5 ; 5

3.a) priemira linha esta rodando um prompt que sempre é uma string e transformando em number. Que sera usado no if
b) Esse numero passou no teste. Porque é maior que 0 / undefined Se o numero for menor que 0, o resultado é undefined porque não tem else
c) A variavel mensagem não aparece no console.log porque ela esta dentro de um escolo local que não é acessado pelo escopo global.
*/
//Exercícios de escrita de código
//1.


const idadeMotorista = Number(prompt("Qual é a sua idade ?"))

if(idadeMotorista >= 18) {
    console.log("Você pode dirigir")

} else{
    console.log("Você não pode dirigir")
}
//Exercicio 2

const periodo = prompt("Qual turno você estuda?(M para matutino, V para vespertino ou N para Noturno) ")

function horario(periodo)
{
if (periodo === "M"){
    console.log("Bom Dia")
    } 
    else if(periodo ==="V"){
    console.log("Boa Tarde")

    }else if (periodo === "N")
    {    console.log("Boa Noite")}

    else{console.log("Nenhum resultado")}
}
horario(periodo)


//Exercicio 3

let periodo1 = prompt("Qual turno você estuda?(M para matutino, V para vespertino ou N para Noturno) ")
let msg
switch (periodo1){
    case "M":
    msg = "Bom Dia"
    break;
    case "V":
    msg = "Boa Tarde"
    break;
    case "N":
    msg = "Boa Noite"
    break;
}
console.log(msg)

// Exercicio 4.

const filme = prompt("Escolha um gênero de filme?")
const preco = Number(prompt("Qual preço maximo a pagar no ingresso?"))

function cinema(filme,preco){

if(filme === "fantasia" && preco <= 15){
    console.log("Bom filme")

}else{
    console.log("Escolha outro filme")}
}

cinema(filme,preco)