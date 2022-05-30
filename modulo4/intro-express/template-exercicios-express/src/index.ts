import express ,{Request , Response} from 'express'
import cors from "cors";
import { usuarios } from './usuarios';

const app = express()

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})

app.get("/users", (req: Request, res: Response) => {         
    
    res.send(usuarios)
})