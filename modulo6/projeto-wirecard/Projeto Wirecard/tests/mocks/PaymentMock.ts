import { Payment, PaymetInputDTO } from "../../src/model/Payment";


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

export const paymentMock3: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 0000",
    cardExpirationDate: "04/2023",
    cardCvv: "560"
}

export const paymentMock4: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "04/2023",
    cardCvv: "1545"
}
export const paymentMock5: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "credit card",
    cardHolderName: "",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "08/2024",
    cardCvv: "560"
}
export const paymentMock6: PaymetInputDTO = {
    clientId: "123456789",
    amount: 0,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "08/2024",
    cardCvv: "560"
}
export const paymentMock7: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "04/2024",
    cardCvv: "560"
}

export const paymentMock8: PaymetInputDTO = {
    clientId: "123456789",
    amount: 3000,
    type: "cartão de credito",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "04/2024",
    cardCvv: "560"
}

const message = {
    payment_id: "1961861e-8878-4d68-9567-aaa351b8b4d4",
    status: "pagamento concluido",
    user_id: "7af6b8b1-6751-4300-961d-650f361b60f7",
    client_id: "123456789",
    amount: 1000,
    type: "credit card",
    cardHolderName: "DIEGO E LIMA",
    cardNumber: "4916 6705 5586 8558",
    cardExpirationDate: "08/2029",
    cardCvv: "560",
    emissor: "Visa",
    name: "Diego",
    email: "diego@email.com",
    cpf: "12345678910"
  }

  export const resultado = Payment.toStatusPaymentModel(message)