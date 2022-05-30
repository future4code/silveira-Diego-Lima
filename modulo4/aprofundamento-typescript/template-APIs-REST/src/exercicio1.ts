//Exercicio 1
let minhaString: string = "Eduardo"
// minhaString = 30
// Erro aponta que minhaString não pode receber number como atributo porque é uma string

let meuNumero: number | string = "Eduardo"
meuNumero = 30
// usando type aliases + union type

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita       
}
enum CorFavorita {
    VERDE = "verde",
    VERMELHO = "vermelho",
    AZUL = "Azul",
    AMARELO = "Amarelo"
}

const pessoa: Pessoa  = {
    nome: "Diego",
    idade: 30,
    corFavorita: CorFavorita.VERDE
}


const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 25,
    corFavorita: CorFavorita.VERMELHO
}
const pessoa3: Pessoa = {
    nome: "João",
    idade: 25,
    corFavorita: CorFavorita.AZUL
}
console.log(pessoa2)