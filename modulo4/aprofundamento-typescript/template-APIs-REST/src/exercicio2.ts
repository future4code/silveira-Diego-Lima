
type Estatisticas = {
    maior : number,
    menor : number,
    media : number
}

function obterEstatisticas(numeros : number[]) : Estatisticas   {

    const numerosOrdenados: number[] = numeros.sort(
        (a : number, b : number)   => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


// entradas são os parametros array de numeros, e as saidas estatisticas é um objeto com propriedades numbers

// numerosOrdenados esta ordenando os numeros de order crescente, a e b são numbers

// estatisticas é um objeto em que as propriedades são numbers

type AmostraDeDados = {

    numeros: number[],
    obterEstatisticas : (numeros :number[]) => Estatisticas
}
console.log(obterEstatisticas([2,4,6,8,10,20]))


