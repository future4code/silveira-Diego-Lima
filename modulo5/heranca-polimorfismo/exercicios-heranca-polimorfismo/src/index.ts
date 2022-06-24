// Herança

import { Client, Place } from "./interface";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;


    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }


}
// const diego = new User("001", "dadds@gmail.com", "Diego Lima", "123456")
//   console.log(diego.getEmail())
//   console.log(diego.getId())
//   console.log(diego.getName())


//   Exercício 1
// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// Não é possivel porque é uma propriedade privada e não tem um get 
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// 1 vez para cada usuario criado.


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

// const consumidor = new Customer("001", "diego@email.com", "Diego Lima", "123456", "Itaucard232215125")

// console.log(consumidor.getCreditCard())
// console.log(consumidor.getEmail())
// console.log(consumidor.getId())
// console.log(consumidor.getName())
// console.log(consumidor.purchaseTotal)


// Exercício 2
// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// 1 vez
// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//1 vez. Porque Customer é filha de User e um novo customer é também um usuario, por isso imprimiu a mensagem.

// Exercício 3
// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não é possivel porque é uma propriedade privada e não tem um get

// Exercício 4

// console.log(consumidor.interoduceYourself())

// Exercício 5
// public interoduceYourself(): string {
//     return `Olá, sou ${this.name}. Bom dia!`
// }

// Polimorfismo
// Exercício 1


const cliente: Client = {
    name: "Diego",
    registrationNumber: 5,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2;
    }
}

console.log(cliente.calculateBill)
console.log(cliente.consumedEnergy)
console.log(cliente.name)
console.log(cliente.registrationNumber)

// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//Não imprimiu o calculateBill, não sei o porquê

// Exercício 2
//a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)).
//  Qual foi o erro que o Typescript gerou? "Não é possível criar uma instância de uma classe abstrata"

// const place = new Place("80600100")

// Exercício 3

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }

}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const casa = new Residence(5, "80650100")

const comercio = new Commerce(5, "01511000")

const industria = new Industry(20, "45300100")

// Exercício 4

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }
    public getCpf(): string {
        return this.cpf;
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// Exercício 5

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }
    public getCnpj(): string {
        return this.cnpj
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}
// a) Quais as semelhanças dessa classe com a ResidentialClient?
// muito parecidas a diferença é cnpj inves de cpf, floorsquantity inves de residencequantity e o valor o kWh

// Exercício 6

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private indutrialNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }public getindutrialNumber(): string {
        return this.indutrialNumber        
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }

}
// filha de industry porque é um tipo de classe espefico para este ramo.
// Client porque apesar de ser de setores diferentes todos são clientes da companhia de energia
// porque não há necessidade de alteração dos dados informados. nome não muda, nem, cep, nem cpf ou cnpj.