import creditCardType from "credit-card-type";
import { PaymentDatabase } from "../data/PaymentDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { Payment, PaymetInputDTO } from "../model/Payment";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import StatusMock from "../services/StatusMock";
import ValidatorCreditCard from "../services/ValidatorCreditCard";


export class PaymentBusiness {
    constructor(
        private paymentDatabase: PaymentDatabase,
        private authenticator: Authenticator,
        private idGeneratator: IdGenerator,
        private validatorCrediCard: ValidatorCreditCard,
        private userDatabase: UserDatabase,
        private statusMock: StatusMock
    ) { }

    public registerPayment = async (input: PaymetInputDTO, token: string) => {
        try {
            const { clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv } = input
            if (!token) {
                throw new CustomError(422, "Esse endpoint exige login")
            }
            if (!clientId || !amount || !type) {
                throw new CustomError(422, "Preencha os campos 'clientId', 'amount' e 'type'")
            }
            const tokenData = this.authenticator.getData(token)

            if (!tokenData) {
                throw new Error("Token inválido")
            }
            const userFromDB = await this.userDatabase.getUserByEmail(tokenData.email);

            const id = this.idGeneratator.generate();

            if (type !== "credit card" && type !== "boleto") {
                throw new CustomError(422, "Tipo informado é inválido preencha com valores 'credit card' ou 'boleto'.")
            }
            if (type === "boleto") {
                const status = "processando"
                const codigoBarras = `34191.79001 01043.510047 91020.150008 6 906700${amount}`

                const newPayment = new Payment(id, status, userFromDB.getId(), clientId, amount, type)

                await this.paymentDatabase.createPayment(newPayment)

                return { newPayment, codigoBarras }
            }
            if (type === "credit card") {
                if (!cardHolderName || !cardNumber || !cardExpirationDate || !cardCvv) {
                    throw new CustomError(422, "Preencha os campos 'cardHolderName','cardNumber','cardExpirationDate' e 'cardCvv'")
                }
                const validCard = this.validatorCrediCard.validCreditCard(cardNumber)
                const validCvv = this.validatorCrediCard.validateCVV(cardNumber, cardCvv)


                if (validCard === false || validCvv === false) {
                    throw new CustomError(409, "O numero de cartão de credito ou cvv são inválidos")
                }
                const emissor = creditCardType(cardNumber).filter((card) => {
                    return card.type
                })
                const date = cardExpirationDate.split("/")

                const validExpirationDate = this.validatorCrediCard.validExpirationDate(date)

                if (validExpirationDate === false) {
                    throw new CustomError(409, "Cartão com data de vencimento expirada")
                }

                const status = this.statusMock.generate(amount)

                const newPayment = new Payment(id, status, userFromDB.getId(), clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv, emissor[0].niceType)

                await this.paymentDatabase.createPayment(newPayment)

                return newPayment

            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
    public getPayment = async (id: string, token: string) => {
        try {
            if (!token) {
                throw new CustomError(422, "Esse endpoint exige login")
            }
            if (!id) {
                throw new CustomError(422, "informe o ID do pagamento para esse endpoint")
            }
            const statusPayment = await this.paymentDatabase.getPaymentById(id)
            if (!statusPayment) {
                throw new CustomError(404, "Pagamento não encontrado, confira se id está correto")
            }
            return statusPayment

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }

    }
}
export default new PaymentBusiness(
    new PaymentDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new ValidatorCreditCard(),
    new UserDatabase(),
    new StatusMock()
)    