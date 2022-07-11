import { Request, Response } from "express"
import app from "./app"
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import login from "./endpoints/login"
import Authenticator from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { authenticationData } from "./types"

const senhaCriptografada = new HashManager().createHash("super")

console.log(senhaCriptografada)

const compare = new HashManager().compareHash("super", senhaCriptografada)

console.log(compare)

app.post("/user/signup", createUser)

app.post("/user/login", login)


app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 422
            res.statusMessage = "Token não informado"
            throw new Error()
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token) as authenticationData

        if (!tokenData) {
            res.statusCode = 401
            res.statusMessage = "Token inválido"
            throw new Error()
        }

        const user = await getUserById(tokenData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: tokenData.role,
        });

    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});