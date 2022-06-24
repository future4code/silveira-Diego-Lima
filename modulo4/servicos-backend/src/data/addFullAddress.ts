import { Address } from "../types/typeAddress"
import { connection } from "./connection"


export const addFullAddress = async (address: Address) => {

    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = address
    await connection("address")
        .insert({
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })

}