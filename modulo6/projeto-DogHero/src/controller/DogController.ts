import { Request, Response } from "express";
import dogBusiness from "../business/DogBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { DogInputDTO } from "../model/DogWalking";

export class DogController {


    public create = async (req: Request, res: Response) => {
        try {

            const { data, preço, duração, latitute, longitude, pets, inicio, fim } = req.body
            const input: DogInputDTO = {
                data,
                preço,
                duração,
                latitute,
                longitude,
                pets,
                inicio,
                fim
            }

            const token = await dogBusiness.createWalk(input);

            res.status(201).send({ token });

        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message });

        } finally {
            await BaseDatabase.destroyConnection();
        }
    }



}
export default new DogController()