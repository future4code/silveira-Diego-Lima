import { Request, Response } from "express";
import { connection } from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../types";


export default async function getUserById (id: string): Promise<any> {
    const result = await connection
      .select("*")
      .from("user")
      .where({ id });

    return result[0];
  }




// export default async function getUserById(req: Request, res: Response) {

//     try {
//         const token = req.headers.authorization as string;

//         const authenticator = new Authenticator()
//         const tokenData = authenticator.getTokenData(token) as authenticationData

//         if (!tokenData) {
//             res.statusCode = 401
//             res.statusMessage = "Token inválido"
//             throw new Error()
//         }

//         if (tokenData.role !== "USER_ROLES.ADMIN") {
//             res.statusCode = 403
//             res.statusMessage = "Você não tem autorização"
//             throw new Error("Você não tem autorização")
//         }

      
//       res.status(200).send({
//         id: result.id,
//         email: result.email,
//         role: result.role,
//     });
// } catch (error: any) {
//     console.log(error)
//     if (res.statusCode === 200) {
//         res.status(500).send({ message: "Internal server error" })
//     } else {
//         res.send({ message: error.message })
//     }

// };