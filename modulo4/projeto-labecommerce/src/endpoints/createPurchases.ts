import { Request, Response } from "express";
import { insertPurchasesByUser } from "../data/insertPurchasesByUser";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { purchaseData } from "../Types/typesPurchases";

export default async function createPurchases(req: Request, res: Response): Promise <void> {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new Error("O usuario, produto e a quantidade devem ser informados!");
        }
        const user = selectUser(userId)
        if (!user) {
            throw new Error(`O usuario com o id ${userId} não foi encontrado!`);
        }
        const product = selectProduct(productId)
        if (!product) {
            throw new Error(`O produto com o id ${productId} não foi encontrado!`);
        }
        const totalPrice = (await product).price * quantity

        const purchase: purchaseData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        await insertPurchasesByUser(purchase)

        res.status(201).send("Compra realizada com sucesso!")
    } catch (error: any) {

        res.status(500).send({ message: error.message })

    }

}
