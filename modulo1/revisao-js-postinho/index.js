
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${1}!==${3} é ${1 !== 3}`
}
console.log(checarDesigualdade(1, 3));

  
// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de igualdade ${1} ===${3} é ${1===3}`
    
    
}
console.log(checarIgualdade(1,3));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a,b){
    return `No comparador de verificar se ${321} > ${2156} é ${321> 2156}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1 =='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui
    let nome = prompt("Qual o seu nome?")
    let idade = Number(prompt("Qual é a sua idade?"))
    let senha = prompt("Digite uma senha com 6 caracteres:")
    let nacionalidade = prompt("Qual seu pais de origem?")

    if (idade < 18){
        return "erro no cadastro"
    }    
     if (senha.length < 6){
         return "erro no cadastro"
     }

    if (nacionalidade !== "brasileiro"){
        return "erro no cadastro"}

 const pessoa ={
     nomeDoUsuario : nome,
     idade: idade,
     senhaDoUsuario: senha,
     nacionalidade: nacionalidade
 }       
usuario.push(pessoa)
return usuario
    
 }
console.log(cadastro());


// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    let senha = prompt("digite sua senha:");
    if(senha === login){
        return "Usuário logado"
    }else {
        return "Senha Inválida"
    }     
}
console.log(login());




// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    //  Sua lógica aqui
let nome = prompt("Digite seu nome")
let vacina = prompt("Digite o nome da vacina ")
let tempo = ""
let data = ""

    if (vacina === "coronavac"){
    tempo = 28
    data = "12/04/2022"
    return  `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
 }  if (vacina === "astrazenica" ){
    tempo = 90
    data = "13/06/2022"
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
 }  if(vacina === "pfizer"){
    tempo = 90
    data = "13/06/2022"
     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
 }

 }

console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
        
    for (let i = 0 ; i < usuarios.length ; i++){
        if(nomeDoUsuario === usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
        }
    }

 console.log(usuarios)}
console.log(segundaDose("Barbara"));



// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    for (let i = 0 ; i < usuarios.length ; i++){
        if( usuarios[i].imunizacao !== "completa" ){
            console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }
}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
      
    let nome = prompt("Qual o seu nome?")
    let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
    let senha = prompt("Digite uma senha com 6 caracteres:")
    let nacionalidade = prompt("Qual a sua nacionalidade?")
    let idade = (2022-anoDeNascimento)
    let novaPessoa = {}
    
    if (idade < 18){
        return "erro no cadastro"
    }    
     if (senha.length < 6){
         return "erro no cadastro"
     }

    if (nacionalidade !== "brasileiro"){
        return "erro no cadastro"}
       
        novaPessoa.nome = nome,
       novaPessoa.ano = anoDeNascimento,
       novaPessoa.nacionalidade = nacionalidade,
       novaPessoa.senha = senha,
           
       usuarios.push(novaPessoa) 
        
        
       return usuarios


}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
    let mensagem;
    let senha = prompt("digite sua senha:");
    for (let i = 0; i < usuarios.length ; i++ )
    if(usuarios[i].senha === senha){
        mensagem = "Usuário logado."
        return mensagem;
    }
    if (mensagem === undefined) {
        console.log("Senha Inválida")
    }     

}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
    let vacina = prompt("Qual vacina você tomou ?")
    let imunizacao = "incompleta"
    
    usuarios[usuarios.length-1] = {
    ...usuarios[usuarios.length-1],
    vacina : vacina,
    imunizacao: imunizacao
}
    return usuarios
       
}
console.log(primeiraDoseDesafio())

const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
    for (let i = 0 ; i < usuarios.length ; i++){
        if(nomeDoUsuario === usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
        }
    }
 console.log(usuarios)
 }
console.log(segundaDoseDesafio("Carlos"));

const avisoAosAtrasadosDesafio = () => {
      
    const apenasOsAtrasados = usuarios.filter((pessoa, indice, array) => {
        return pessoa.imunizacao === "incompleta"
     })
    const mensagemIncompleta = apenasOsAtrasados.map((pessoa) =>{
        return  `Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose`

    }) 
    return mensagemIncompleta
}
console.log(avisoAosAtrasadosDesafio());
