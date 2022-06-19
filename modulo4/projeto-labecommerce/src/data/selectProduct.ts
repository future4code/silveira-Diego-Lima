import { Product } from "../Types/typesProduct";
import { connection } from "./connection";



export default async function selectProduct(productId: string): Promise <Product> {

    const product = await connection("labecommerce_products")
        .select("labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url")
        .where({id: productId})
    
        return product[0]
}
