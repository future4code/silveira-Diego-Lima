// - Exercício 2
//     Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.
// input: várias possibilidades
// output: nenhuma


const nomeDaVariavel = (variavel : any) : string => {

    return typeof variavel
}

console.log(nomeDaVariavel("38"))