import app from "./app"
import { getProfile } from "./endpoints/getProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"



app.get("/user/profile", getProfile)

app.get("/user/:id", getProfileById)

app.post("/signup", signup)

app.post("/login", login)

app.post("/recipe")