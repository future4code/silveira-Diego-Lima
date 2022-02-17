//Exercícios de interpretação de código
// a. undefined
// b. null
// c. 11
// d. 3
// e. (11) [3,19,5,6,7,8,9,10,11,12,13]
// f. 9
//2. SUBI NUM ÔNIBUS EM MIRROCOS, 27
// Exercícios de escrita de código

const nomeDoUsuario = prompt("Insira seu nome")
const emailDoUsuario = prompt("Insira seu email")
const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
console.log(frase)

let comidasPreferidas =["lasanha", "strogonoff","arroz","pizza","bife"]
console.log(comidasPreferidas)

console.log(`Essas são as minhas comidas preferidas:`)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])



const suaComidaPreferida = prompt("Qual a sua comida preferida ?")

comidasPreferidas.splice(1,1)
console.log(comidasPreferidas)
comidasPreferidas.push(suaComidaPreferida)
console.log(comidasPreferidas)

const listaDeTarefas =[]
const tarefaDoDia = prompt("Informe uma tarefa do seu dia")
const tarefaDoDia2 = prompt("Informe outra tarefa do seu dia")
const tarefaDoDia3 = prompt("Informe mais uma tarefa do seu dia")
listaDeTarefas.push(tarefaDoDia, tarefaDoDia2,tarefaDoDia3)
console.log(listaDeTarefas)
const tarefaFeita = prompt(" Qual índice da tarefa você já realizou?")
listaDeTarefas.splice(tarefaFeita -1,1)
console.log(listaDeTarefas)