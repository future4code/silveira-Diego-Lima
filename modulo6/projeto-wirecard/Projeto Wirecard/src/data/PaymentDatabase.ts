import { Payment } from "../model/Payment";
import { BaseDatabase } from "./BaseDatabase";

export class PaymentDatabase extends BaseDatabase {

  private static TABLE_NAME = "Payment_Wirecard";

  public async createPayment(payment: Payment): Promise<void> {

    try {
      await this.getConnection()
        .insert({
          payment_id: payment.getId(),
          status: payment.getStatus(),
          user_id: payment.getUserId(),
          client_id: payment.getClientId(),
          amount: payment.getAmount(),
          type: payment.getType(),
          card_holder_name: payment.getCardHolderName(),
          card_number: payment.getCardNumber(),
          card_expiration_date: payment.getExpirationDate(),
          card_cvv: payment.getCvv(),
          emissor: payment.getEmissor()
        })
        .into(PaymentDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPaymentById(id: string): Promise<Payment> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(PaymentDatabase.TABLE_NAME)
        .join('User_Wirecard', 'User_Wirecard.id', '=', 'user_id')
        .where(id);
      
      return result[0] && Payment.toStatusPaymentModel(result[0]);

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
export default new PaymentDatabase()