import { performPurchase, User } from "../src"



describe(" testanto o arquivo index.js", () => {
    test("testando a função 'performPurchase' com saldo maior ", () => {
        const user: User = {
            name: "Diego",
            balance: 500
        }
        const result = performPurchase(user, 400)

        expect(result).toEqual({
            name: "Diego",
            balance: 100
        })
    })
    test("testando a função 'performPurchase' com saldo igual ", () => {
        const user: User = {
            name: "Diego",
            balance: 500
        }
        const result = performPurchase(user, 500)

        expect(result).toEqual({
            name: "Diego",
            balance: 0
        })
    })
    test("testando a função 'performPurchase' com saldo menor ", () => {
        const user: User = {
            name: "Diego",
            balance: 300
        }
        const result = performPurchase(user, 400)

        expect(result).not.toBeDefined()

    })
})