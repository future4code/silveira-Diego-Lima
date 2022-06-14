import { connection } from "./connection"


 export default async function selectUsersPaginated(size: number, offset:number):Promise<any> {
    
    const table = "aula49_exercicio"    
    const result = await connection(table)
    .limit(size)
    .offset(offset)
    
    return result  
}    