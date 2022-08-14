import { TextField } from "@mui/material";
import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    
    p{
    font-size: 1rem;
    }
    form{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 80%;
    justify-content: space-evenly;
    
    }    

`
export const TextFieldStyled = styled(TextField)`
    width: 100% ;
   

`

export const Title = styled.h2`     
    font-family: Roboto;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`
