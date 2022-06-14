import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(req: Request,res: Response): Promise<void> {
   let errorCode=400
   try {
      const table = "aula49_recipes"
      const title = req.query.title
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)
      if(page <1|| isNaN(page)){
         page=1
      }
      //verificação antes de fazer o calculo do offset. 
      let size = 2
      let offset = size*(page -1)

      if(sort!=="title"&& sort !== "created_at"){
         sort="title"
      }

      if(order.toUpperCase()!== "ASC" && order.toUpperCase()!== "DESC"){
         order = "DESC"
      }

      //USANDO O QUERY BUILDER
      const result = await connection(table)
      .where('title','LIKE',`%${title}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      const recipes = result.map(toRecipe)

      //USANDO O RAW
      // const result = await connection.raw(`
      //    SELECT * FROM ${table}
      //    WHERE title LIKE '%${title}%'
      //    ORDER BY ${sort} ${order};
         
      // `)
      // console.log(result[0])
      // const recipes = result[0].map(toRecipe)

      
      if(recipes.length<1){
         errorCode = 422
         throw new Error("título não encontrado ou acabaram as receitas.",);
      }

      res.status(200).send(recipes)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}