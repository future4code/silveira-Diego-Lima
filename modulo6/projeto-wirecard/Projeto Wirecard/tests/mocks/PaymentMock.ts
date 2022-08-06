import { PaymetInputDTO } from "../../src/model/Payment";


export const paymentMock: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "boleto",
    cardHolderName: "",
    cardNumber: "",
    cardExpirationDate: "",
    cardCvv: ""
}

export const paymentMock2: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "04/2022",
    cardCvv: "560"
}