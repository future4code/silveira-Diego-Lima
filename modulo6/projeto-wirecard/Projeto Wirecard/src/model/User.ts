
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private cpf: string,
        
    ) { }

    public getId = () => this.id
    public getName = () => this.name
    public getEmail = () => this.email
    public getPassword = () => this.password
    public getCpf = () => this.cpf
   

    static toUserModel(user: any) {
        return new User(user.id, user.name, user.email, user.password, user.cpf);
    }
}

export interface UserInputDTO {
    email: string;
    password: string;
    name: string;
    cpf: string;
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

