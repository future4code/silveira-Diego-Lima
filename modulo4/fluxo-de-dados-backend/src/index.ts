import express, { Request, Response } from "express"
import cors from "cors"
import { Produtos, produtos } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/test", (req: Request, res: Response) => {

  res.send(`Endpoint esta funcionando`)
})
// Exercício 3
app.post("/novo-produto", (req: Request, res: Response) => {
  const novoProduto = req.body
  if (!novoProduto) {
    throw new Error("Informações do novo produto não foram incluidas")
  }
  produtos.push(novoProduto)

  res.status(200).send(produtos)
})
// Exercício 4
app.get("/produtos", (req: Request, res: Response) => {

  res.status(200).send(produtos)
})
// Exercício 5
app.put("/editarPreco/:id", (req: Request, res: Response) => {
  const id = req.params.id
  const price = req.body.price;

  const findProduct: Produtos | undefined = produtos.find((products) => {
    return products.id === id
  })
  if (!findProduct) {
    throw new Error("Produto não encontrado")
  }
  findProduct.price = price
  res.status(200).send(produtos)
})
// Exercício 6
app.delete("produto/delete/:id", (req: Request, res: Response) => {
    const id = req.params.id
    if (!id) {
      throw new Error("ID não encontrado")
    }   
  const indexProduto = produtos.findIndex(produto => produto.id === id)
  produtos.slice(indexProduto, 1)

})




