import { Product } from "../Types/typesProduct";
import { connection } from "./connection";


export default async function insertProduct(product: Product): Promise<string> {

    const { id, name, price, imageUrl } = product

    await connection("labecommerce_products")
        .insert({
            id,
            name,
            price,
            imageUrl
        })

    return `O produto ${name} foi criado com sucesso`
}   
