import { Request, Response } from "express"
import { RecipeDataBase } from "../data/RecipeDataBase"


export async function getRecipeById(req: Request, res: Response) {
    let errorCode: number = 400
    try {
        const id = req.params.id as string
        const token = req.headers.authorization
        if (!token || !id) {
            errorCode = 422
            throw new Error("Esse endpoint exige uma autorização através do headers e 'ID' da receita por params")
        }

        const recipeDataBase = new RecipeDataBase()
        const recipe = await recipeDataBase.getRecipe(id)

        res.status(200).send(recipe)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }


}