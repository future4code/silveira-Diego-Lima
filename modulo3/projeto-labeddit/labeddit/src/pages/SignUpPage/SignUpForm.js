import React from "react";
import { StyledButton, } from "../../global/GlobalStyled";
import { FormContainer } from "./styled"
import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm"



const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        
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
            <p> Eu concordo em receber emails sobre coisas legais <br /> no Labeddit </p>
            <StyledButton variant="contained" color="primary" margin="normal" type={'submit'}>
                Cadastrar
            </StyledButton>

        </FormContainer>

    )

}

export default SignUpForm;