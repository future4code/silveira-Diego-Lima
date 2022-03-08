// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((item) =>{
      if ( item % 2 === 0){
          return true
      }else {
          return false}

  })  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   return array.filter((item) =>{
        if (item % 2 === 0){
            return true 
        }else {
            return false}
  
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for(let num of array){
      if (num > maior) {
          maior = num
      
        }
  } return maior 

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = 0
let menorNumero = 0
let maiorDivisivelPorMenor
if(num1 > num2){
return  maiorNumero = num1, menorNumero =num2 
 } else if (num1<num2){
return maiorNumero = num2, menorNumero = num1
 } else if(maiorNumero%menorNumero){
 return maiorDivisivelPorMenor = true
} else {
return maiorNumero=menorNumero
}

return objeto
} 


let objeto ={maiorNumero: maiorNumero, maiorDivisivelPorMenor: maiorDivisivelPorMenor, diferenca: maiorNumero-menorNumero}




// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPares = []
    for(let numero = 0; arrayPares.length < n ; numero++ )
            if ( number % 2 === 0){
                arrayPares.push(numero)
            }
            return arrayPares
        }
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 
    if (ladoA&&ladoB&&ladoC){
      return `Equilátero`
  } else if (ladoA||ladoB||ladoC){
    return `Isósceles` }
     else {
         return `Escaleno`}


    } 
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}