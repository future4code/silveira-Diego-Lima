
//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"



const aniversario = (nome:string,dataDeNascimento:string):string => {
    
    const novaData = dataDeNascimento.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${novaData[0]} do mês de ${novaData[1]} do ano de ${novaData[2]}`
}

console.log(aniversario("Diego", "06/09/1991"))
