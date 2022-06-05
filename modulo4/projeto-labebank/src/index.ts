import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './data'

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.post("/users", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const { nome, CPF, dataNascimentoString} = req.body
    if( !nome || !CPF || !dataNascimentoString){
      codeError = 404
      throw new Error (" O nome , cpf ou data de nascimento são necessarios")
    }

    const [dia, mes, ano] = dataNascimentoString.split("/")
    const dataNascimento: Date = new Date(`${ano}-${mes}-${dia}`)
    const idadeEmMilisegundos: number = Date.now() - dataNascimento.getTime()
    const idadeEmAnos: number = idadeEmMilisegundos /1000 /60 /60 /24 /365  

    if(idadeEmAnos < 18){
      codeError = 406
      throw new Error("Idade deve ser maior que 18 anos");      
    }
  
    const newUser:User = {
      nome,
      CPF,
      dataNascimento: dataNascimento,
      saldo: 0,
      extrato : [],  
    }
    users.push(newUser)
    res.status(201).send(users)        
  } catch (error: any) {
    res.status(codeError).send(error.message)   
    
  }
})  

app.get("/users", (req: Request, res: Response) => {
  let codeError = 400 
  try {
    if(!users.length){
      codeError = 404
      throw new Error("Nenhum usuario foi encontrado")
    }
    
    res.status(200).send(users)
  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})  
