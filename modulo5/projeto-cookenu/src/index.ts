import app from "./app"
import { followUser } from "./endpoints/followUser"
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

app.post("/user/follow", followUser)