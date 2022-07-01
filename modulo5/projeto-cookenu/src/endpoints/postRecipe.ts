import { Request, Response } from "express"
import { RecipeDataBase } from "../data/RecipeDataBase"
import { Recipe } from "../model/Recipe"
import { IdGenerator } from "../services/IdGenerator"



export async function postRecipe(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const { title, description } = req.body
        const token = req.headers.authorization

        if (!token) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers")
        }
        if (!title || !description) {
            errorCode = 422
            throw new Error("Preencha todos os campos 'title' e 'description'")
        }
        
        const idGenetator = new IdGenerator();
        const id = idGenetator.generate();

        const createdAt = new Date()

        const recipeDataBase = new RecipeDataBase()
        const newRecipe = new Recipe(id, title, description,createdAt)
        const recipe = await recipeDataBase.createRecipe(newRecipe)
                      
        res.status(200).send({ message: 'Receita cadastrada com sucesso' });

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }

}