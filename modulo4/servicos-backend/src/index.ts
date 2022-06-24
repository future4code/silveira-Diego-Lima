import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAddress } from "./endpoints/getAddress"
import { insertAddress } from "./endpoints/insertAddress"

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/endereco/:cep", getAddress)

app.post("/user", insertAddress)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})