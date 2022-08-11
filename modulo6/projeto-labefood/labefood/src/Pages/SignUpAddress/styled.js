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
    margin-top: 20px;
    flex-direction: column;
    height: 50%;
    width: 90%;
    justify-content: space-evenly;
    
    }    

`
export const TextFieldStyled = styled(TextField)`
width: 100% ;

`


