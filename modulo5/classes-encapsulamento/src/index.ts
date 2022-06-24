//Exercício 1

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// ele é usado para criar o objeto. Utiliza a palavra reservada "new" e passa os parâmetros a ser criado

// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser).
//  Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? 1 vez;

// c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// utilizando getters e setters para essas propriedades privadas

type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}
const diego = new UserAccount("01234567810", "Diego Eduardo", 30)

//   Exercício 2

class transaction {
    private description: string
    private value: number
    private date: string
    constructor(date: string, value: number, description: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public setDescription(description: string) {
        this.description = description
    }
    public getValue(): number {
        return this.value
    }
    public setValue(value: number) {
        this.value = value
    }
    public getDate(): string {
        return this.date
    }
    public setDate(date: string) {
        this.date = date
    }
}

//   Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    public getAccounts():UserAccount[] {
        return this.accounts
    }
    public setDescription(accounts: UserAccount[]) {
        this.accounts = accounts
    }
   
}