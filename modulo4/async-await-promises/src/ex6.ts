import axios from "axios";
import { baseURL } from "./baseURL";



// a. O que o Promise.all faz? De uma só vez ela resolve todas as promisses da função./ 

// b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar 
// as notificações para todos os usuários? A principal vantagem é a velocidade em que se recebe a resposta
// sem all promisses, é enviando um por um. No all promisses é tudo de uma vez.

const getAllSubscribers = async () => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

const getSubscribersIds = (subscribers: any) => {
    return subscribers.map((subscriber: any) => {
        return subscriber.id
    })
}

const notifiyUsers = async (ids: string[]) => {
    try {
        const requests = ids.map(id =>
            axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Olá, há uma nova notícia em nosso site"
            }))
        await Promise.all(requests)
        console.log(`Notificações enviadas com sucesso`)
    } catch (erro) {
        console.log(`Erro ao notificar`)
    }
}

const main = async () : Promise<void> => {
    try {
        const inscritos = await getAllSubscribers()
        const inscritosIds = getSubscribersIds(inscritos)
        await notifiyUsers(inscritosIds)

    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()