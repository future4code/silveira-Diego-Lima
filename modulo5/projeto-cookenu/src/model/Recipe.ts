
export class Recipe {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: Date
    ) { }
    public getId = () => this.id
    public getTitle = () => this.title
    public getDescription = () => this.description
    public getCreatedAt = () => this.createdAt

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.createdAt);
    }
}