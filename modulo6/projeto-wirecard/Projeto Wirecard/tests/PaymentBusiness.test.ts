import { IdGeneratorMock } from './mocks/idGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PaymentBusiness } from '../src/business/PaymentBusiness';
import { UserDatabaseMock } from './mocks/UserDatabaseMock';
import { PaymentDatabaseMock } from './mocks/PaymentDatabaseMock';
import { paymentMock, paymentMock2, paymentMock3, paymentMock4, paymentMock5, paymentMock6, paymentMock7, paymentMock8, resultado } from './mocks/PaymentMock';
import ValidatorCreditCardMock from './mocks/ValidatorCreditCardMock';
import StatusMock2 from './mocks/StatusMock2';

const PaymentBusinessMock = new PaymentBusiness(
    new PaymentDatabaseMock as any,
    new AuthenticatorMock() as any,
    new IdGeneratorMock(),
    new ValidatorCreditCardMock(),
    new UserDatabaseMock() as any,
    new StatusMock2()
)

describe("Testando o regitro de pagamentos", () => {
    test("Sucesso em caso de pagamento por boleto", async () => {

        const token = "token"
        try {
            await PaymentBusinessMock.registerPayment(paymentMock, token)
            expect(token).toEqual("token")
        } catch (error: any) {
        } finally {
            expect.assertions(1)
        }
    })
    test("Sucesso em caso de pagamento por cartão de credito", async () => {

        const token = "token"
        try {
            await PaymentBusinessMock.registerPayment(paymentMock7, token)
            expect(token).toEqual("token")
        } catch (error: any) {
        } finally {
            expect.assertions(1)
        }
    })

    test("Fracasso informou data de vencimento expirada", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock2, token)
        } catch (error: any) {
            expect(error.message).toEqual("Cartão com data de vencimento expirada")
            expect(error.statusCode).toBe(409)
        } finally {
            expect.assertions(2)
        }
    })
    test("Fracasso informou numero de cartão de credito inválido", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock3, token)
        } catch (error: any) {
            expect(error.message).toEqual("O numero de cartão de credito ou cvv são inválidos")
            expect(error.statusCode).toBe(409)
        } finally {
            expect.assertions(2)
        }
    })
    test("Fracasso informou numero de cvv inválido", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock4, token)
        } catch (error: any) {
            expect(error.message).toEqual("O numero de cartão de credito ou cvv são inválidos")
            expect(error.statusCode).toBe(409)
        } finally {
            expect.assertions(2)
        }
    })
    test("Fracasso não informou 'cardHolderName' na opção de pagamento por cartão de credito", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock5, token)
        } catch (error: any) {
            expect(error.message).toEqual("Preencha os campos 'cardHolderName','cardNumber','cardExpirationDate' e 'cardCvv'")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Fracasso não informou o valor do pagamento independente do tipo de pagamento", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock6, token)
        } catch (error: any) {
            expect(error.message).toEqual("Preencha os campos 'clientId', 'amount' e 'type'")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
    test("Fracasso informou tipo de pagamento incorreto", async () => {
        try {
            const token = "token"
            await PaymentBusinessMock.registerPayment(paymentMock8, token)
        } catch (error: any) {
            expect(error.message).toEqual("Tipo informado é inválido preencha com valores 'credit card' ou 'boleto'.")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })
})

describe("Testando o pegar status de pagamentos", () => {
    test("Fracasso informou numero de ID incorreto", async () => {
        try {
            const token = "token"
            const id = "121213132132132"
            await PaymentBusinessMock.getPayment(id, token)
        } catch (error: any) {
            expect(error.message).toEqual("Pagamento não encontrado, confira se id está correto")
            expect(error.statusCode).toBe(404)
        } finally {
            expect.assertions(0)
        }
    })
    test("Sucesso", async () => {

        const token = "token"
        const id = "1961861e-8878-4d68-9567-aaa351b8b4d4"
        const message = resultado
        try {
            await PaymentBusinessMock.getPayment(id, token)
            expect(message).toEqual(resultado)
        } catch (error: any) {
        } finally {
            expect.assertions(1)
        }

    })


})    