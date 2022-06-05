import express from "express"
import cors from "cors"
import { afazeres } from "./data"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))


app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})

app.get("/tarefas/", (req, res) => {
  const tarefa: string | boolean = req.query.completed as string
  if (!tarefa) res.status(400).send("Não é possível realizar a operação. Parametro ausente")

  const tarefasCompletas = afazeres.filter((afazeres: any) => {
    return afazeres.completed === tarefa
  })
  res.status(200).send(tarefasCompletas)
})
app.post("/criarTarefa/", (req, res) => {
  type Tarefas = {
    userId: string, 
    id: number,
    title: string,
    completed: string | boolean,
  }
  const novaTarefa: Tarefas = req.body
  if (!novaTarefa) res.status(400).send("Não é possível realizar a operação. Tarefa não informada")

  afazeres.push(novaTarefa)

  res.status(200).send(afazeres)
})
app.put("/alterarTarefa/", (req, res) => {
  const userId: string | number = req.query.userId as string
  const id = req.query.id
  if (!userId) res.status(400).send("Não é possível realizar a operação. UserID não informado")
  if (!id) res.status(401).send("Não é possível realizar a operação. ID não informado")
  const listaFiltrada = afazeres.filter((afazeres: any) => {
    return afazeres.userId === userId
  })
  const tarefaAlterada = listaFiltrada.filter((afazeres: any) => {
    return afazeres.id === id
  })


})
