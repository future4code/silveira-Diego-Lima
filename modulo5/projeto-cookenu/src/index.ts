import app from "./app"
import { getProfile } from "./endpoints/getProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { getRecipeById } from "./endpoints/getRecipeById"
import { login } from "./endpoints/login"
import { postRecipe } from "./endpoints/postRecipe"
import { signup } from "./endpoints/signup"



app.get("/user/profile", getProfile)

app.get("/user/:id", getProfileById)

app.get("/recipe/:id", getRecipeById )

app.post("/signup", signup)

app.post("/login", login)

app.post("/recipe", postRecipe)

const createdAt = new Date()
console.log(createdAt)