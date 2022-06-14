import { connection } from "./connection"



 export default async function selectUsersByName(name:string):Promise<any> {
    
    const table = "aula49_exercicio"    
    const result = await connection(table)
    .where(`name`, `LIKE`,`%${name}%`)    
    console.log(name)
    return result
}    