import { Recipe } from "../model/Recipe";
import BaseDataBase from "./BaseDataBase";


export class RecipeDataBase extends BaseDataBase {
    public async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDataBase.connection("cookenu_recipes")
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    createdAt: recipe.getCreatedAt()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipe(id: string): Promise<Recipe> {
        try {
            const recipe = await BaseDataBase.connection("cookenu_recipes")
                .select('id', 'title', 'description','createdAt')
                .where({ id });
            return Recipe.toRecipeModel(recipe[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}