import { connection } from "./connection"



 export default async function selectUsersByType(type:string):Promise<any> {
    
    const table = "aula49_exercicio"    
    const result = await connection(table)
    .where(`type`,`LIKE`,`%${type}%`)    

    return result
}    

