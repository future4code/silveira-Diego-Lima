import { Product } from "../Types/typesProduct";
import { connection } from "./connection";

const typeProduct = (product: any) => {
    const createProduct: Product = {
        id: product.id,
        name: product.name,
        price : product.price,
        imageUrl: product.image_url
    }
    return createProduct
}

export default async function selectProducts(): Promise<Product[] | undefined> {

    const result = await connection("labecommerce_products")

    const allProductsTyped = result.map((product) => {
        return typeProduct(product)
    })

    return allProductsTyped    
}