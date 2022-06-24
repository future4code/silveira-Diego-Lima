import { connection } from "./connection"



 export default async function selectUsers(name : string, order:string, sort: string, size: number, offset:number ):Promise<any> {
    
    const table = "aula49_exercicio"    
    const result = await connection(table)
    .where(`name`, `LIKE`,`%${name}%`)
    .orderBy(order,sort)
    .limit(size)
    .offset(offset)
        

    return result
}    