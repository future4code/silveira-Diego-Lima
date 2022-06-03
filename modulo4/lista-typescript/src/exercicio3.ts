
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


const filmeInfo = (nome: string, anoLancamento: number, genero: GENERO, pontuacao ?: number ): {} => {

    const filme = {nome , anoLancamento, genero, pontuacao}
    return filme
}
console.log(filmeInfo("Duna",2021,GENERO.ACAO))

