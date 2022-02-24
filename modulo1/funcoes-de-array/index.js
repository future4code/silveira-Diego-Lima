// Exercícios de interpretação de código
//1. Será impresso 3 vezes o array usuarios

//2. Será impresso [Amanda Rangel, Lais Petra, Leticia Chijo]
//3. Será impresso [Mandi, Laura]

//Exercícios de escrita de código
//1.
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesPets = pets.
map((item) => {
      return item.nome
      
 })
 console.log(nomesPets)
//B
 const petSalsinhas = pets.
 filter((item) => {
   if(item.raca ==="Salsicha"){
    return true
   }
 })
 console.log(petSalsinhas)
//C

const petPoodle = pets.filter((item) =>{
    if(item.raca ==="Poodle"){
        return true
    }
})
console.log(petPoodle)

const nomePoodle = petPoodle.map((item) =>{
      return item.nome

    })
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle[0]}`)
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle[1]}`)
*/
    // Exercicio 2

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
/*    
const nomeProdutos = produtos.map((item) =>{
    return item.nome
})
console.log(nomeProdutos)
//b) 
const produtosDesconto = produtos.map((item) =>{
    const objeto = {nome: item.nome , preco: (item.preco)*0.95} 
           
    return objeto
})
console.log(produtosDesconto)
*/

//C
const produtosBebidas = produtos.filter((item) =>{
    if(item.categoria === "Bebidas"){
        return true
    }
})
console.log(produtosBebidas)

//D
const produtosYpe = produtos.filter((item) =>{
if (item.nome.includes("Ypê"))
 return true
 
})   
console.log(produtosYpe)

//E
const compreYpe = produtosYpe.map((item)=>{
    item.nome
    return item.nome        
})
const precoYpe = produtosYpe.map((item)=>{
    return item.preco
       
})

console.log(compreYpe)
console.log(`Compre ${compreYpe[0]} por ${precoYpe[0]} `)
console.log(`Compre ${compreYpe[1]} por ${precoYpe[1]} `)