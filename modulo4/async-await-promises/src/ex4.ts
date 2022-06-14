import axios from "axios";
import { baseURL } from "./baseURL";


// a. Qual é o tipo dessa função? Por quê? Tipo PUT, porque de acordo com a documentação é o endpoint usado para isso.
// b. Implemente a função solicitada 

const main = async () => {
    try {
        await createNews()
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
}

type News = {
    title: string,
    content: string,
    date: number
}
const news: News = {
    title: "Silveira saiu do Frontend",
    content: "Para a alegria de muitos, e a tristeza de alguns, a turma Silveira está, agora, no backend!",
    date: Date.now()
}

const createNews = async (): Promise<void>  => {
    await axios.put(`${baseURL}/news`, news)
}

main()