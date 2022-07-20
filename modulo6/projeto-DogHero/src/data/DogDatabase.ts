import { DogWalking } from "../model/DogWalking";
import { BaseDatabase } from "./BaseDatabase";

export class DogDatabase extends BaseDatabase {

    private static TABLE_NAME = "Dog_Walking";

    public async createUser(dog: DogWalking): Promise<void> {

        try {
            await this.getConnection()
                .insert({
                    id: dog.getId(),
                    status: dog.getStatus(),
                    data: dog.getData(),
                    preco: dog.getPreço(),
                    duracao: dog.getDuração(),
                    latitude: dog.getLatitute(),
                    longitude: dog.getLongitude(),
                    pets: dog.getPets(),
                    horario_inicio: dog.getInicio(),
                    horario_fim: dog.getFim()

                })
                .into(DogDatabase.TABLE_NAME);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

}

export default new DogDatabase()