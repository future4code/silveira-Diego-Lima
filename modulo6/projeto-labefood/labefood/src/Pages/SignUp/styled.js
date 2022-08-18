import { TextField } from "@mui/material";
import styled from "styled-components";

export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    p{
        font-size: 1rem;
    }
`
export const Form = styled.form`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 80%;
    justify-content: space-evenly;
`

export const TextFieldStyled = styled(TextField)`
    width: 100% ;
`

export const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const LogoContainer = styled.div`
    display: flex;
    margin: 2rem;
    justify-content: center;
`

