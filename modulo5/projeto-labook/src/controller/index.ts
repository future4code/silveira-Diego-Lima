import app from "./app"
import UserController from "./UserController"


const userController = new UserController()


app.post("/signup", userController.signUp)

app.post("/login", userController.login)

