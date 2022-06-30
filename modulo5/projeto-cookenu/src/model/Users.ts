
export class Users {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
    public getId = () => this.id
    public getName = () => this.name
    public getEmail = () => this.email
    public getPassword = () => this.password

    static toUserModel(data: any): Users {
        return new Users(data.id, data.name, data.email, data.password);
    }
}
