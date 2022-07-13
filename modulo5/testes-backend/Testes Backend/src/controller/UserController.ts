import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";

export class UserController {

   public async getUser(req: Request, res: Response) {
      try {
         const id = req.body.id as string
         const result = await userBusiness.findUserById(id)
           
         res.status(200).send(result);
      } catch (error: any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

  
}

export default new UserController()