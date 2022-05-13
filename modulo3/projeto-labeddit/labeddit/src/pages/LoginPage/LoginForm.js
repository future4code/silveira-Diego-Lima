import React, {useState} from "react";
import { FormContainer } from "./styled"
import { StyledButton } from "../../global/GlobalStyled";
import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm"
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress'



const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmitForm = (event) => {
        event.preventDefault()        
        login(form, clear, navigate, setIsLoading)        
    }

    return (

        <FormContainer onSubmit={onSubmitForm}>
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
                required
                type={"password"}

            />
            <StyledButton type={'submit'} variant="contained" color="primary" margin="normal" >
                {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Continuar</>}
            </StyledButton>

        </FormContainer>

    )

}

export default LoginForm;