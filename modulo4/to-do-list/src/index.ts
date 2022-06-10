import express, {Request, Response, Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { createUser } from './endpoints/createUser';


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
    try {
      await createUser(
        req.body.name,
        req.body.nickName,
        req.body.email
      );
      res.status(201).send()      
    } catch (error:any) {
      res.status(400).send({ message: error.message || error.sqlMessage })
    }   
  });

