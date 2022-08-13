import styled from "styled-components";
import { Button, TextField } from "@mui/material";


export const Form = styled.form`
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    height: 40%;
    width: 80%;
    justify-content: space-between;
    
`

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    p{
        font-size: 1rem;
    }
`

export const TextFieldStyled = styled(TextField)`
    width: 100% ;
    
`