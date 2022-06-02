import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}
enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

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
//exercicio 1
// Metodo Get e usarei entidade users

app.get("/allusers", (req:Request, res: Response) => {
  res.status(200).send(users)
    

})

app.get("/users", (req:Request, res: Response) => {
  let errorCode: number = 400
  const name: string = req.query.name as string
  const user: User | undefined = users.find((user) => user.name === name)
  try {
    if(!user){
      errorCode = 404
      throw new Error('Usuário não encontrado')
    }
    res.status(200).send(user)
  } catch (error: any) { 
    res.status(errorCode).send({message:error.message})      
  }  
})



//exercicio 2
// primeiro eu usei o type como string depois mudei para um enum com dois tipos validos: ADM e Normal.

//exercicio 3
// query params, codigo foi refatorado
// Exercicio 4

app.post("/users",(req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const {id, name, email, type, age } = req.body
    if(!id|| !name || !email || !type || !age){
      errorCode = 422
      throw new Error('Verifique se todos os campos estão preenchidos')
    }
    const newUser : User = {
      id,
      name,
      email,
      type,
      age
    }  
    users.push(newUser)
    res.status(201).send({message : "Usuário criado com sucesso"})

  } catch (error: any ) {
    res.status(errorCode).send({message:error.message})
  }
})

app.put("/users",(req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const {id, name, email, type, age } = req.body
    if(!id|| !name || !email || !type || !age){
      errorCode = 422
      throw new Error('Verifique se todos os campos estão preenchidos')
    }
    const newUser : User = {
      id,
      name,
      email,
      type,
      age
    }  
    users.push(newUser)
    res.status(201).send({message : "Usuário criado com sucesso"})

  } catch (error: any) {
    res.status(errorCode).send({message:error.message})
  }
})
// não teve diferença entre usar Post ou Put, os usuarios são criados corretamente.
// b) Não acho apropriado, porque acho mais organizado ter metodos diferentes para funcionalidades diferentes. 
// e para mim criar um novo elemento é diferente de fazer uma alteração de um elemento já existente.