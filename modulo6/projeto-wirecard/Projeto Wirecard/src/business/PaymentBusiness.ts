import { PaymentDatabase } from "../data/ShowDatabase";
import { CustomError } from "../error/CustomError";
import { ShowInputDTO } from "../model/Payment";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";


export class PaymentBusiness {
    constructor(
        private paymentDatabase: PaymentDatabase,
        private authenticator: Authenticator,
        private idGeneratator: IdGenerator
    ) { }

    public addShow = async (show: ShowInputDTO, token: string) => {

        try {
            


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
    new IdGenerator()
)    