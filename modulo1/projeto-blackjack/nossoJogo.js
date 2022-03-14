/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta(); 
 let usuario
 let usuario1 
 let computador
 let computador1
 
 let i = 0
console.log("Boas vindas ao jogo de Blackjack!")
  
if(confirm("Quer iniciar uma nova rodada?")) {
   for (let i = 0; i <2; i++ ); 
        usuario = comprarCarta(i)
        computador = comprarCarta(i)
        usuario1 = comprarCarta(i)
        computador1 = comprarCarta(i)
        

 const carta1 = usuario["valor"]
 const carta2 = usuario1["valor"]
 const carta3 = computador["valor"]
 const carta4 = computador1["valor"]


 somarCartas = (primeira,segunda) =>{
    return primeira + segunda
 }
 let somaUsuario = somarCartas(carta1,carta2)
 let somaComputador = somarCartas(carta3,carta4)

 console.log(`Usuário - cartas: ${usuario["texto"]} ${usuario1["texto"]} - pontuação ${somaUsuario}`)
 console.log(`Computador - cartas: ${computador["texto"]} ${computador1["texto"]} - pontuação ${somaComputador}`)


 function vencedor (somaUsuario,somaComputador){
 if (somaUsuario > somaComputador){
     console.log("O usuário ganhou!")
    }
     else if (somaUsuario < somaComputador)
    {console.log("O computador ganhou!")}
 
 else { console.log("Empate!")}   
}

vencedor(somaUsuario,somaComputador)

} else {    console.log("O jogo acabou")}

