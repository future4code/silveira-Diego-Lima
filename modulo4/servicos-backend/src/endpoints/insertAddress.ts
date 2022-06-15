import { Request, Response } from "express"
import { addFullAddress } from "../data/addFullAddress"
import { getFullAddress } from "../data/getFullAddress"

export const insertAddress = async(req: Request, res: Response) => {
    try {
        const cep = req.query.cep as string
        const numero = req.query.numero as string
        const complemento = req.query.complemento as string
       
        const address = await getFullAddress(cep, numero,complemento)
        if(!address){
            throw new Error("Cep inválido");
            
        }
        await addFullAddress(address)    
        res.send("Endereço criado com sucesso ")
        
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}