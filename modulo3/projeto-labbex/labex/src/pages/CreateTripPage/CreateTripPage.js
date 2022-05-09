import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { CreatePageContainer, InputContainer, Titulo, DivButtons, InputLabel, SelectLabel, FormContainer } from "./styled";
import axios from "axios";
import useForm from "../../hooks/useForm";

const listaDePlanetas = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
]

export const CreateTripPage = () => {
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });


    const navigate = useNavigate()

    const createTrip = () => {
        console.log(form)
        const body = form
        const token = localStorage.getItem('token')
        const headers = {
            headers: {
                "auth": token
            }
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-lima-silveira/trips', headers, body)
            .then((res) => {
                console.log('Deu certo', res.data)

            }).catch((err) => {
                console.log(err.response)
            });
    }

    return (
        <CreatePageContainer>
            <Titulo>Criar Viagem</Titulo>
            <InputContainer>
                <form onSubmit={createTrip}>
                    <InputLabel
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        type="text"
                        required

                    />
                    <SelectLabel
                        name={"planet"}
                        defaultValue={""}
                        onChange={onChange}
                        placeholder={"Planeta"}
                        required
                    >
                        <option value={""} disabled>Escolha um Planeta</option>
                        {listaDePlanetas.map((planet) => {
                            return <option value={planet} key={planet}>{planet}</option>
                        })}
                    </SelectLabel>
                    <InputLabel
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        type="date"
                        required
                    />
                    <InputLabel
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        type="text"
                        required
                    />
                    <InputLabel
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder={"Duração em dias"}
                        type="number"
                        required
                        min={50}
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