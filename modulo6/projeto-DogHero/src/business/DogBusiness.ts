
import { DogDatabase } from "../data/DogDatabase";
import { CustomError } from "../error/CustomError";
import CalculatePrice from "../model/CalculatePrice";
import { DogInputDTO, DogWalking } from "../model/DogWalking";
import Filter from "../model/Filter";
import IdGenerator from "../services/IdGenerator";

export class DogBusiness {
    constructor(
        private dogDatabase: DogDatabase,
        private idGeneratator: IdGenerator,
        private calculatePrice: CalculatePrice,
        private filter: Filter
    ) { }

    public createWalk = async (dog: DogInputDTO) => {

        try {
            const { data, duração, latitude, longitude, pets, inicio, fim } = dog;
            if (!data || !duração || !latitude || !longitude || !pets || !inicio || !fim) {
                throw new CustomError(422, " Preencha todos os campos com 'data', 'duração', 'latitude', 'longitude', 'pets', 'inicio', e 'fim' ");
            }
            const revetedData = data.split('/').reverse().join('-')

            const price = this.calculatePrice.calculate(duração, pets)

            const id = this.idGeneratator.generate();

            const status = "Agendado"

            const newWalk = new DogWalking(id, status, revetedData, price, duração, latitude, longitude, pets, inicio, fim)

            await this.dogDatabase.createDogWalking(newWalk);


        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
    public getWalking = async (filtro: string) => {

        try {

            if (filtro) {
                const filtroValidado = this.filter.calculate(filtro)

                const lista = await this.dogDatabase.getWalkingWithFilter(filtroValidado);

                if (lista.length < 1) {
                    throw new CustomError(404, "Não foi possivel encontrar a lista")
                }
                return lista
            }
            if (!filtro) {

                const lista = await this.dogDatabase.getWalkingWithoutFilter()

                if (lista.length < 1) {
                    throw new CustomError(404, "Não foi possivel encontrar a lista")
                }
                return lista
            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }


}

export default new DogBusiness(
    new DogDatabase(),
    new IdGenerator(),
    new CalculatePrice(),
    new Filter()
)