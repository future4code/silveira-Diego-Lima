import { IdGeneratorMock } from './mocks/idGeneratorMock';
import { AuthenticatorMock } from './mocks/AuthenticatorMock';
import { PaymentBusiness } from '../src/business/PaymentBusiness';
import { UserDatabaseMock } from './mocks/UserDatabaseMock';
import { PaymentDatabaseMock } from './mocks/PaymentDatabaseMock';
import { paymentMock, paymentMock2 } from './mocks/PaymentMock';
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
    test("Sucesso", async () => {

        const token = "token"
        try {
            await PaymentBusinessMock.registerPayment(paymentMock, token)
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
})