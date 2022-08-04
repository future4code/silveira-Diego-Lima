import creditCardType from "credit-card-type";
import { PaymentDatabase } from "../data/PaymentDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { Payment, PaymetInputDTO } from "../model/Payment";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import ValidatorCreditCard from "../services/ValidatorCreditCard";


export class PaymentBusiness {
    constructor(
        private paymentDatabase: PaymentDatabase,
        private authenticator: Authenticator,
        private idGeneratator: IdGenerator,
        private validatorCrediCard: ValidatorCreditCard,
        private userDatabase: UserDatabase
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
                const status = ""
                const codigoBarras = `34191.79001 01043.510047 91020.150008 6 906700${amount}`

                const newPayment = new Payment(id, status, userFromDB.getId(), clientId, amount, type)

                await this.paymentDatabase.createPayment(newPayment)

                return { newPayment, codigoBarras }
            }
            if (type === "credit card") {
                if (!cardHolderName || !cardNumber || !cardExpirationDate || !cardCvv) {
                    throw new CustomError(422, "Preencha os campos 'cardHolderName','cardNumber','cardExpirationDate' e 'cardCvv'")
                }
                const validCard = this.validatorCrediCard.valid_credit_card(cardNumber)

                console.log(validCard)

                const emissor = creditCardType(cardNumber).filter((card) => {
                    return card.type
                })

                console.log(emissor)


                const status = ""
                const newPayment = new Payment(id, status, userFromDB.getId(), clientId, amount, type, cardHolderName, cardNumber, cardExpirationDate, cardCvv)

                await this.paymentDatabase.createPayment(newPayment)

                return newPayment

            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
    public getAllShows = async () => {
        try {



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
    new UserDatabase()
)    