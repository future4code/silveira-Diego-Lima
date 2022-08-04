export class Payment {
    constructor(
        private id: string,
        private user_id: string,
        private client_id: string,
        private amount: number,
        private type : string,
        private cardHolderName ?: string,
        private cardNumber?: number,
        private cardExpirationDate ?: string,
        private cardCvv ?: number,    

    ) { }

    public getId = () => this.id
    public getUserId = () => this.user_id
    public getClientId = () => this.client_id
    public getAmount = () => this.amount
    public getType = () => this.type
    public getCardHolderName = () => this.cardHolderName
    public getCardNumber = () => this.cardNumber
    public getExpirationDate = () => this.cardExpirationDate
    public getCvv = () => this.cardCvv
    


    static toPaymentModel(payment: any) {
        return new Payment(payment.id, payment.user_id, payment.client_id, payment.amount, payment.type);
    }
    static toPaymentCrediCardModel(payment: any) {
        return new Payment(payment.id, payment.user_id, payment.client_id, payment.amount, payment.type, payment.cardHolderName, payment.cardNumber, payment.cardExpirationDate, payment.cardCvv );
    }
}

export interface PaymetInputDTO {
    userId: string;
    clientId: string;
    amount: number;
    type: string;
    cardHolderName?: string;
    cardNumber?: number;
    cardExpirationDate?: string;
    cardCvv?: number
}