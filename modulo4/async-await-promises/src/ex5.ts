import axios from "axios";
import { baseURL } from "./baseURL";


// Agora, implemente uma função que receba um array de usuários e uma mensagem 
// e envie essa mensagem como notificação para todos os usuários


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
    for (const id of ids) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Bom dia, olhe as novas noticias no nosso site"
            })
            console.log(`Notificação enviada a ${id}`)
        } catch (erro) {
            console.log(`Erro ao enviar para ${id}`)
        }
    }
}    

const main = async (): Promise<void> => {
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