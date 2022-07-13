import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/userDatabaseMock"


const userBusinessMock = new UserBusiness(

    new UserDatabaseMock() as any
)

describe("Testando o findUserById", () => {
    test("Dever retornar erro quando o id não é registrado", async () => {
        
        try {
            await userBusinessMock.findUserById("id_user_1")
        } catch (error: any) {
            expect(error.message).toBe(404)
            expect(error.message).toBe("User not found")
        }finally {
            expect.assertions(0)
        }    
        })

    test("Deve retornar o respectivo usuario quando ID é registrado", async () => {
        try {
            const getUserById = jest.fn(
                (id: string) => userBusinessMock.findUserById(id)
            )

            const result = await getUserById("id_mock_admin")

            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
            expect(result).toEqual({
                id: "id_mock_admin",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN",
            })
        } catch (error) {

        } finally {
            expect.assertions(2)
        }  
    })

})