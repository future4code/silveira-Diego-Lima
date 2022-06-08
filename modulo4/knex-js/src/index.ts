import express, { Request, Response, Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    }
});

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


//Exercicio 1
//a) Retorna um objeto RowDataPacket com as informações do ator 
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

(async () => {
    console.log(await getActorById("001"))
})()
//b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'`)
    return result[0][0]
}
// (async () => {
//     console.log(await getActorByName("Paolla Oliveira"))
// })()


//c
const getActorByGender = async (gender: string) => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`);
    return result[0][0].count
}
(async () => {
    console.log(await getActorByGender("male"))
})()


//Exercicio 2
//a)
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary
            }).where({ id: req.params.id })
        res.status(200).send("Alterado com sucesso")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})
//b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .delete()
            .where({ id: req.params.id });
        res.status(200).send("Deletado com sucesso")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//C)
const getAvgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as averege")
        .where({ gender });
    return result[0].averege;
};    
(async () => {
console.log(await getAvgSalary("male"))})()

// Exercício 3
// a)

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await connection("Actor")
      .select('*')
      .where({id: id})    
      res.status(200).send(result)
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

// b)

const countActors = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .count("* as count") 
    .where({gender})    
    return result[0].count
}    

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);

      res.status(200).send({quantity: count});
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//   Exercício 4
// a)

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(200).send();
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//   b)
// atualiza o salario
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary
            }).where({ id: req.params.id })
        res.status(200).send("Alterado com sucesso")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//Deleta usuario pelo ID
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .delete()
            .where({ id: req.params.id });
        res.status(200).send("Deletado com sucesso")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})