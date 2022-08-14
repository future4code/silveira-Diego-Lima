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
display: flex;
flex-direction: column;
height: 30%;
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

export const Title = styled.h2`
    font-family: Roboto;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`

export const LogoContainer = styled.div`
    display: flex;
    margin: 2rem;
    justify-content: center;
`

export const ContainerImg = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 108vh;
    z-index: 2;

`