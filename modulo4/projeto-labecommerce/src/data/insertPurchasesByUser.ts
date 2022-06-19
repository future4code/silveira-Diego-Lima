import { purchaseData } from "../Types/typesPurchases"
import { connection } from "./connection"


export const insertPurchasesByUser = async(purchase: purchaseData): Promise <void> => {
    
     await connection("labecommerce_purchases")
    .insert({
        id: purchase.id,
        user_id: purchase.userId,
        product_id: purchase.productId,
        quantity: purchase.quantity,
        total_price: purchase.totalPrice
    }) 

}