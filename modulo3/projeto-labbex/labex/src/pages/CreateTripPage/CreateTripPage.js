import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { CreatePageContainer, InputContainer, Titulo, DivButtons } from "./styled";
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import useForm from "../../hooks/useForm";



export const CreateTripPage = () => {
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });

    const navigate = useNavigate()

    const criarViagem = (event) =>{
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego/trips',
            {
                headers: {
                    auth: token
                }
            }).then((res) => {
                console.log('Deu certo', res.data)
            }).catch((err) => {
                console.log(err.response)
            });

    }

    return (
        <CreatePageContainer>
            <Titulo>Criar Viagem</Titulo>
            <InputContainer>
                <form>
                    <TextField id="outlined-basic" label="Nome" variant="filled" size="small" margin="normal"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required

                    />
                    <TextField id="outlined-basic" label="Planeta" variant="filled" size="small" margin="normal"
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        placeholder={"Senha"}
                        type="planet"
                        required
                    />
                    <TextField id="outlined-basic" label="" variant="filled" size="small" margin="normal"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        type="date"
                        required

                    />
                    <TextField id="outlined-basic" label="Descrição" variant="filled" size="small" margin="normal"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        required

                    />
                    <TextField id="outlined-basic" label="Duração em dias" variant="filled" size="small" margin="normal"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        type="number"
                        required

                    />
                </form>

            </InputContainer>
            <DivButtons>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button>Criar</button>
            </DivButtons>
        </CreatePageContainer>

    )
}
    ;