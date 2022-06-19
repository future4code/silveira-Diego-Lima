import createUser from "./endpoints/createUser";
import  app  from "./app";
import createProduct from "./endpoints/createProduct";
import getProducts from "./endpoints/getProducts";
import getUsers from "./endpoints/getusers"
import createPurchases from "./endpoints/createPurchases";


app.post("/user", createUser );

app.get("/users", getUsers );

app.post("/product", createProduct);

app.get("/products", getProducts)

app.post("/purchases", createPurchases)