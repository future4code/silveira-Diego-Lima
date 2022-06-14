import axios from "axios";
import { baseURL } from "./baseURL";

// a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem? Não
//b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. 
// Explique com as suas palavras o porquê de fazermos isso. Porque ficará mais facil para outras pessoas que ler e entender seu codigo e lidar melhor com possiveis erros.

type user = {
	id: string;
	name: string;
	email: string;
}


const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    
    return response.data.map((res:any) => {
        return{
            id: res.id,
            name: res.name,
            email: res.email,
        };
    }); 
 };

 getSubscribers()