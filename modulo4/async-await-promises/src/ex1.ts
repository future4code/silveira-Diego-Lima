import axios from "axios";
import { baseURL } from "./baseURL";

// a. Qual endpoint você deve utilizar para isso? GET
// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"? Promise<any[]>

async function getSubscribers(): Promise<void> {
    await axios.get(`${baseURL}/subscribers`)
    .then((res) => { console.log(res.data)})
    .catch((err) => { console.log(err.data)})
 };

 getSubscribers()