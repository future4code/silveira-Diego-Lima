import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { DivButtons, InputContainer, Titulo, LoginContainer } from "./styled"
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import useForm from "../../hooks/useForm";


export const LoginPage = () => {
    const { form, onChange, cleaFields } = useForm({ email: "", password: "" });

    const navigate = useNavigate()

    const logar = (event) => {
        event.preventDefault();
        console.log(form)
        const body = form
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego/login', body)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                navigate('/admin')
            }).catch((err) => {
                console.log(err)
            });
    };


    return (
        <LoginContainer>
            <Titulo>LoginPage</Titulo>
            <InputContainer>
                <form onSubmit={logar}>
                    <TextField id="outlined-basic" label="Email" variant="filled" size="small" margin="normal"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder={"E-mail"}
                        required
                        type="email"
                    />
                    <TextField id="outlined-basic" label="Senha" variant="filled" size="small" margin="normal"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        placeholder={"Senha"}
                        type="password"
                        required
                        inputProps={{ pattern: "^.{6,}" }}
                        title={"A senha deve ter no mínimo 6 caracteres"}
                    />

                    <DivButtons>
                        <button onClick={() => goBack(navigate)}> Voltar </button>
                        <button>Logar</button>
                    </DivButtons>
                </form>
            </InputContainer>
        </LoginContainer>

    )
}
    ;