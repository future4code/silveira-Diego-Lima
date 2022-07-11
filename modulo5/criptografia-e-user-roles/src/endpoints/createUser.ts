import { Request, Response } from "express";
import { connection } from "../connection";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";


export default async function createUser(req: Request, res: Response) {

    try {
        const { email, password, role } = req.body

      if (!email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password', 'role', e 'email'")
      }
      
      const [user] = await connection('user')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const id: string = new IdGenerator().generateId()


      const hashManager: HashManager = new HashManager()

      const senhaCriptografada = hashManager.createHash(password)

      const newUser: user = { id, email,
        password: senhaCriptografada, role: role }
       
       await connection('user')
          .insert(newUser)
 
       const payload: authenticationData = {
          id: newUser.id,
          role: role
       }
 
       const token = new Authenticator().generateToken(payload)
 
       res.status(201).send({ token })
    } catch (error: any) {
        console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   
    }
};
