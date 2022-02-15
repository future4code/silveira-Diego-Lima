/**Exercícios de interpretação de código
 * 1 
 * console.log("a.", resultado) = false
 * console.log("b.", resultado) = false 
 * console.log("c.", resultado) = true
 * console.log("d.", resultado) = boolean
 */
/** 2
 * O erro é que prompt é uma string e não number então não somará os dois numeros, 
 * somará as duas palavras 
 */
/** 3
 * O prompt é uma string precisa trocar para tipo number 
 * e a soma será realizada como desejado
 */
//Exercícios de escrita de código
//Exercício 1

const qualSuaIdade = Number(prompt("Digite um número!"))
const qualIdadeMelhorAmigo = Number(prompt("Digite um número!"))

let resultado = qualSuaIdade > qualIdadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo", resultado)
console.log(qualSuaIdade-qualIdadeMelhorAmigo)
//Exercício 2
const numeroPar = Number(prompt("Digite um número par"))
let resultado2 = (numeroPar % 2)
console.log(resultado2)
// resultado é sempre 0
// resultado é sempre 1
//Exercício 3
const qualSuaIdadeAnos = Number(prompt("Qual sua idade em anos?"))
let resultado3 = qualSuaIdadeAnos*12 
let resultado4 = qualSuaIdadeAnos*365
let resultado5 = (qualSuaIdadeAnos*365)*24
console.log("Sua idade em meses é", resultado3)
console.log("Sua idade em dias é", resultado4)
console.log("Sua idade em horas é", resultado5)
//Exercício 4
const primeiroNumero = Number(prompt("Insira um número"))
const segundoNumero = Number(prompt("Insira outro número"))
let resultado6 = primeiroNumero > segundoNumero
let resultado7 = primeiroNumero === segundoNumero
let resultado8 = (primeiroNumero % segundoNumero) === 0
let resultado9 = (segundoNumero % primeiroNumero) === 0

console.log("O primeiro numero é maior que o segundo ? ", resultado6)
console.log("O primeiro numero é igual ao segundo ?", resultado7)
console.log("O primeiro numero é divisível pelo segundo ?", resultado8)
console.log("O segundo numero é divisível pelo primeiro ?", resultado9)
