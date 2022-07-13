
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { USER_ROLES } from "../model/User";



export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase
    ) { }

    public async findUserById(id: string) {
        try {
            if (!id) {
                throw new CustomError(422, "Missing input");
            }
            const user = await this.userDatabase.getUserById(id)

            return user
        } catch (error: any) {
            if (error.message.includes("key 'email'")) {
                throw new CustomError(409, "Email already in use")
            }

            throw new CustomError(error.statusCode, error.message)
        }
    }
    // public async getAllUsers(role: USER_ROLES) {
    //     if (stringToUserRole(role) !== USER_ROLES.ADMIN) {
    //        throw new CustomError(401, "You must be an admin to access this endpoint"
    //       );
    //     }
    //     const users = await this.userDatabase.getAllUsers();
    
    //     return users.map((user) => ({
    //       id: user.getId(),
    //       name: user.getName(),
    //       email: user.getEmail(),
    //       role: user.getRole(),
    //     }));
    //  }
}

export default new UserBusiness(
    new UserDatabase()
)