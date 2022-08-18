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
    form{
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    height: 70%;
    width: 90%;
    justify-content: space-evenly;
    
    }    

`
export const TextFieldStyled = styled(TextField)`
width: 100% ;

`