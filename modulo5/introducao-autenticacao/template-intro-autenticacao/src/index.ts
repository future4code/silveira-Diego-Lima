import app from "./app"
import { Request, Response } from "express"
import { generateId } from "./services/generatorId"
import createUser from "./data/createUser"
import { generateToken } from "./services/generatorToken"
import getUserByEmail from "./data/getUserByEmail"
import getUserById from "./data/getUserById"
import { getData } from "./services/getData"

//EXERCICIO 4
app.post("/user/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({ token, });

  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});

//EXERCICIO 6
app.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }
    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//EXERCICIO 8

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

   
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});