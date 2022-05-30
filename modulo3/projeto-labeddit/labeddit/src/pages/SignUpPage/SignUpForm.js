import React, { useState } from "react";
import { StyledButton, } from "../../global/GlobalStyled";
import { FormContainer } from "./styled"
import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'



const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const onSubmitForm = (event) => {

        event.preventDefault()
        signUp(form, clear, navigate, setIsLoading)

    }


    return (

        <FormContainer onSubmit={onSubmitForm}>
            <TextField id="outlined-basic" label="Nome do usuário" variant="outlined" size="small" margin="normal"
                name={"username"}
                value={form.username}
                onChange={onChange}
                required
                autoFocus

            />
            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" margin="normal"
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={"email"}
            />
            <TextField id="outlined-basic" label="Senha" variant="outlined" size="small" margin="normal"
                name={"password"}
                value={form.password}
                onChange={onChange}
                type={"password"}
                required

            />
            <p>Ao continuar, você concorda com o nosso Contrato de <br /> usuário, e nossa Política de Privacidade</p>
            <StyledButton variant="contained" color="primary" margin="normal" type={'submit'}>
                {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Cadastrar</>}
            </StyledButton>

        </FormContainer>

    )

}

export default SignUpForm;