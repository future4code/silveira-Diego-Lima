import { Payment } from "../model/Payment";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class PaymentDatabase extends BaseDatabase {

  private static TABLE_NAME = "Payment_Wirecard";

  public async createPayment(payment: Payment): Promise<void> {

    try {
      await this.getConnection()
        .insert({
          id: payment.getId(),
          user_id: payment.getUserId(),
          client_id: payment.getClientId(),
          amount: payment.getAmount(),
          type: payment.getType(),
          card_holder_name: payment.getCardHolderName(),
          card_number: payment.getCardNumber(),
          card_expiration_date: payment.getExpirationDate(),
          card_cvv: payment.getCvv()
        })
        .into(PaymentDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
  // public async getUserByEmail(email: string): Promise<User> {
  //   try {
  //     const result = await this.getConnection()
  //       .select("*")
  //       .from(PaymentDatabase.TABLE_NAME)
  //       .where({ email });

  //     return result[0] && User.toUserModel(result[0]);

  //   } catch (error: any) {
  //     throw new Error(error.sqlMessage || error.message);
  //   }
  // }
}
export default new PaymentDatabase()