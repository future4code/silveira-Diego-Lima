import express, {Request, Response, Express} from 'express'
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

app.post("/user", async (req: Request , res: Response) => {
  let errorCode: number = 400
    try {
      const name = req.body.name
      const nickName = req.body.nick_name
      const email = req.body.email
      if(!name || !nickName || !email){
        errorCode = 422
      throw new Error('Verifique se todos os campos estão preenchidos')
      }
      await connection.raw(`
      INSERT INTO Users (id,name,nick_name,email)
      VALUES(
        ${Date.now().toString()},
        "${name}",
        "${nickName}",
        "${email}");
      `)
      res.status(201).send("Usuario criado com sucesso")      
    } catch (error:any) {
      res.status(errorCode).send({message:error.message})
      res.status(400).send({ message: error.message || error.sqlMessage })
    }   
  });

//Exercico 2
//Endpoint de consulta de usuario pelo id

app.get("/user/:id", async (req:Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    if(!id){
      errorCode = 422
    throw new Error('Id do usuário não foi informado')
    }
    const user = await connection("Users")
        .select("id", "nick_name")
        .where({ id: id });
      if(user.length < 1){
        errorCode = 404
    throw new Error('O usuário não foi encontrado')
      }  
    res.status(200).send(user[0])
} catch (error: any) {
    res.status(errorCode).send({message:error.message})
    res.status(500).send(error.sqlMessage || error.message)
}
})
//Exercico 3
//Endpoint para editar usuario

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    const id = req.params.id
    if(!id){
      errorCode = 404
    throw new Error('Id do usuário não foi informado')}
    const nickName = req.body.nickName
    const name = req.body.name
    if(!nickName || !name){
      errorCode = 422
    throw new Error('Cheque se todos os campos foram informados')}

    await connection("Users")
      .update({
        name: name,
        nick_name: nickName
      }).where({id: id})
      res.status(200).send(`Usuário, ${id} foi editado com sucesso`) 
  } catch (error: any) {
    res.status(errorCode).send({message:error.message})
    res.status(500).send(error.sqlMessage || error.message)
  }
})

//Exercico 3
// Endpoint para Criar tarefa

