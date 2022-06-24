import { connection } from "./connection"



 export default async function selectUsersOrdered(order:string, sort: string):Promise<any> {
    
    const table = "aula49_exercicio"    
    const result = await connection(table)
    .orderBy(order,sort)
        

    return result
}    