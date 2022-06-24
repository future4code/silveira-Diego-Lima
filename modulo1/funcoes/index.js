//Exercícios de interpretação de código
/** 1.
 * a) 10 50
 * b) console ficaria em branco. Porque não teria nada para imprimir na tela
 * 2.
 * a) A função ira tornar o texto digitado pelo usuario em letras minusculas
 * e irá retorná true ou false,  se usuario digitou a palavra "cenoura". 
 * b) 
 * i. eu gosto de cenoura. true
 * ii. cenoura é bom pra vista. true
 * iii. cenouras crescem na terra. false
*/
//Exercícios de escrita de código
// 1 a)

function imprimirFrase (){
 `Eu sou Diego, tenho 30 anos, moro em Curitiba e sou estudante.`
}
console.log(imprimirFrase)


// b)
function frase(nome, idade, endereco, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
 
}
const retornoDaFrase = frase("Diego", 30, "Curitiba" , "estudante")
// 2 a)

/**function somar(number1,number2){
 console.log(number1 + number2)
}
const retornoDaSoma = somar(25,32)
// b)
function maiorOuIgual(number1,number2){
    console.log(number1 >= number2)
   }
   const retornoDaSoma = maiorOuIgual(25,32)
//c)
function parOuImpar(number1){
    console.log((number1 % 2) === 0)
    return (number1 % 2) === 0)
}
   const numeroQualquer = parOuImpar(10)*/
//d)
/**function mensagem(msg){
    
    console.log(msg.toUpperCase(), msg.length)
    
}
const fraseQualquer = mensagem("eu sou estudante na Labenu, estou estudando javascript.")

*/
//3 
let primeiroNumero = Number(prompt("Informe um numero"))
let segundoNumero = Number(prompt("Informe um numero"))

function operacoes(primeiroNumero,segundoNumero){
operacoes = numero1 + numero2
console.log(`Soma: ${operacoes}`)
operacoes = numero1 - numero2
console.log(`Diferença: ${operacoes}`)
operacoes = numero1*numero2
console.log(`Multiplicação: ${operacoes}`) 
operacoes = numero1/numero2
console.log(`Divisão: ${opercacoes}.`)
return operacoes
}




