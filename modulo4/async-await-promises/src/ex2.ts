import axios from "axios";
import { baseURL } from "./baseURL";


// A. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// basicamente o que mudou foi a posição que inseri "async" na nomeada foi logo no inicio na arrow function foi apos o sinal de igualdade.
//

//B

 const getSubscribers = async (): Promise<void> => {
    await axios.get(`${baseURL}/subscribers`)
    .then((res) => { console.log(res.data)})
    .catch((err) => { console.log(err.data)})
 }

 getSubscribers()
