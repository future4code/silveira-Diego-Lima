import { User } from "../model/User";
import BaseDataBase from "./BaseDatabase";


export class UserDatabase extends BaseDataBase {

   protected tableName: string = "User_Arq"

   private toModel(dbModel?: any): User | undefined {
      return (
         dbModel &&
         new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.role
         )
      );
   }

   public async getUserById(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
              SELECT * from ${this.tableName} WHERE id = '${id}'
           `);
         return this.toModel(result[0][0]);
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   // public async getAllUsers(id: string): Promise<User[] | undefined> {
   //    try {
   //       const users = await BaseDataBase.connection()
   //          .select("*")
   //          .into(this.tableName)

         
   //       return users.this.toModel
   //    } catch (error: any) {
   //       throw new Error(error.sqlMessage || error.message)
   //    }
   // }


}
export default new UserDatabase()
