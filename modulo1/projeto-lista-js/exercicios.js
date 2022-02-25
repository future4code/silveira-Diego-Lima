// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const alturaDoRetangulo = Number(prompt("Digite a altura do retângulo"))
 const larguraDoRetangulo = Number(prompt("Digite a largura do retângulo"))
 console.log(alturaDoRetangulo*larguraDoRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 const anoAtual = Number(prompt("Digite o ano atual"))
 const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento"))
 console.log(anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 calculaIMC = 88, 1.7;
 return (peso/(altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual o seu nome ?")
const idade = Number(prompt("Qual sua idade ?"))
const email = prompt("Qual seu email ?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let corFavorita1 = prompt("Qual sua cor favorita ?")
let corFavorita2 = prompt("Qual sua segunda cor favorita ?")
let corFavorita3 = prompt("Qual sua terceira cor favorita ?")

console.log([corFavorita1,corFavorita2,corFavorita3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 retornaStringEmMaiuscula = (string)
 return retornaStringEmMaiuscula.toUpperCase()
 
 
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso) 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

return ((string1.length)===(string2.length))

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
   
 return array[2]
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
 const  ultimo = array.pop()
 const primeiro = array.splice(0,1)
 trocaPrimeiroEUltimo = array.push(ultimo)
 trocaPrimeiroEUltimo = array.push(primeiro[0])


 return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toLowerCase)===(string2.toLowerCase)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}