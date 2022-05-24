//Exercicio 2

const operacao = process.argv[2]
const primeiro = Number(process.argv[3])
const segundo = Number(process.argv[4])


switch (operacao) {
    case "soma":
        console.log("Resposta:", primeiro + segundo)
        break;
    case "subt":
        console.log("Resposta:", primeiro - segundo)
        break;
    case "mult":
        console.log("Resposta:", primeiro * segundo)
        break;
    case "div":
        console.log("Resposta:", primeiro / segundo)
        break;
}