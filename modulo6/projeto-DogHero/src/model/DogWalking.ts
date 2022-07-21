
export class DogWalking {
    constructor(
        private id: string,
        private status: string,
        private data: string,
        private preço: number,
        private duração: string,
        private latitude: string,
        private longitude: string,
        private pets: number,
        private inicio: number,
        private fim: number
    ) { }

    public getId = () => this.id
    public getStatus = () => this.status
    public getData = () => this.data
    public getPreço = () => this.preço
    public getDuração = () => this.duração
    public getLatitute = () => this.latitude
    public getLongitude = () => this.longitude
    public getPets = () => this.pets
    public getInicio = () => this.inicio
    public getFim = () => this.fim

    
    static toDogModel(dog: any) {
        return new DogWalking(dog.id, dog.status, dog.data, dog.preço, dog.duração, dog.latitude, dog.longitude, dog.pets, dog.inicio, dog.fim);
    }
}

export interface DogInputDTO {
    data: string,
    duração: string,
    latitude: string,
    longitude: string,
    pets: number,
    inicio: number,
    fim: number
}

