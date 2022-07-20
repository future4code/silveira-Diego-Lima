
import { DogDatabase } from "../data/DogDatabase";
import { CustomError } from "../error/CustomError";
import { DogInputDTO, DogWalking } from "../model/DogWalking";
import IdGenerator from "../services/IdGenerator";

export class DogBusiness {
    constructor(
        private dogDatabase: DogDatabase,
        private idGeneratator: IdGenerator
    ) { }

    public createWalk = async (dog: DogInputDTO) => {

        try {
            const { data, preço, duração, latitute, longitude, pets, inicio, fim } = dog;
            if (!data || !preço || !duração || !latitute || !longitude || !pets || !inicio || !fim) {
                throw new CustomError(422, " Fill up all the fields 'name', 'email', 'password' and 'role' ");
            }
           
       
            const id = this.idGeneratator.generate();

            const status= ""

            const newUser = new DogWalking(id,status,data,preço,duração,latitute,longitude,pets,inicio,fim)

            await this.dogDatabase.createUser(newUser);

            

            return {message:"Dog Walking criada com sucesso"};

        } catch (error: any) {
            if (error.message.includes("key 'email'")) {
                throw new CustomError(409, "Email already in use")
            }
            throw new CustomError(error.statusCode, error.message)
        }
    }

    
}

export default new DogBusiness(
    new DogDatabase(),
    new IdGenerator()
)