import axios from "axios"
import { Address } from "../types/typeAddress"

export const getFullAddress = async(cep:string, numero:string, complemento:string): Promise<Address|undefined> => {
    try {
        
       const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`) 

       const address: Address = {
        cep,   
        logradouro: result.data.logradouro,
        numero,
        complemento,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf    
    }
       return address
    
    } catch (error: any) {
        return undefined
    }

}