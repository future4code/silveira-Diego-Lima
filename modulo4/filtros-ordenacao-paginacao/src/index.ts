import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllusers";
import { getUserPaginated } from "./endpoints/getUserPaginated";
import { getUsers } from "./endpoints/getUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersOrdered } from "./endpoints/getUsersOrdered";

app.get("/recipes", getAllRecipes)

app.get("/users" , getAllUsers )

app.get("/users/name" , getUsersByName)

app.get("/users/type" , getUsersByType)

app.get("/users/ordered", getUsersOrdered)

app.get("/users/paginate", getUserPaginated)

app.get("/users/features" , getUsers )