import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from './data/baseDataBase';


const app: Express = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//Exercico 1
//Endpoint de criação de usuários

app.post("/user", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { name, nick_name, email } = req.body
    if (!name || !nick_name || !email) {
      errorCode = 422
      throw new Error('Verifique se todos os campos estão preenchidos')
    }
    await connection.raw(`
      INSERT INTO Users (id,name,nick_name,email)
      VALUES(
        ${Date.now().toString()},
        "${name}",
        "${nick_name}",
        "${email}");
      `)
    res.status(201).send("Usuario criado com sucesso")
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    res.status(400).send({ message: error.message || error.sqlMessage })
  }
});

//Exercico 2
//Endpoint de consulta de usuario pelo id

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    if (!id) {
      errorCode = 422
      throw new Error('Id do usuário não foi informado')
    }
    const user = await connection("Users")
      .select("id", "nick_name")
      .where({ id: id });
    if (user.length < 1) {
      errorCode = 404
      throw new Error('O usuário não foi encontrado')
    }
    res.status(200).send(user[0])
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    res.status(500).send(error.sqlMessage || error.message)
  }
})
//Exercico 3
//Endpoint para editar usuario

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    if (!id) {
      errorCode = 404
      throw new Error('Id do usuário não foi informado')
    }
    const nickName = req.body.nickName
    const name = req.body.name
    if (!nickName || !name) {
      errorCode = 422
      throw new Error('Cheque se todos os campos foram informados')
    }

    await connection("Users")
      .update({
        name: name,
        nick_name: nickName
      }).where({ id: id })
    res.status(200).send(`Usuário, ${id} foi editado com sucesso`)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//Exercico 4
// Endpoint para Criar tarefa

app.post("/task", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422
      throw new Error('Verifique se todos os campos estão preenchidos')
    }
    const status: string = "to_do"
    let dataBrasileira: string = limitDate
    let dataAmericana: string = dataBrasileira.split('/').reverse().join('-')
    await connection.raw(`
      INSERT INTO Tasks (task_id,title,description,limit_date,status,creator_user_id)
      VALUES(
        ${Date.now().toString()},
        "${title}",
        "${description}",
        "${dataAmericana}",
        "${status}",
        "${creatorUserId}");
      `)
    res.status(201).send("Tarefa criada com sucesso")
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    res.status(400).send({ message: error.message || error.sqlMessage })
  }
});

//Exercico 5
// Endpoint para busca tarefa por ID

app.get("/task/:id" , async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
      if (!id) {
      errorCode = 422
      throw new Error('Id da tarefa não foi informado')
    }
    
    const task = await connection.raw(`
    SELECT task_id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, nick_name as creatorUserNickname FROM Tasks 
    JOIN Users ON Users.id = creator_user_id
    WHERE task_id = ${id};
    `)
    let dataAmericana: string = task[0][0].limitDate
 
    let dataBrasileira: string = dataAmericana.split('/').reverse().join('-')
    console.log(dataBrasileira)
    // const dataCorrigida = task[0][0].limitDate : dataBrasileira

    res.status(200).send(task[0][0])
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
    res.status(400).send({ message: error.message || error.sqlMessage })
  }
});
