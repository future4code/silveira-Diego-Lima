import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 5em;
    width: 25em;
    height: max-content;
    padding: 20px;
    flex-direction: column;
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
`
export const DivImage = styled.img`
    width: 5em;
    height: 4em;
    
`
export const ButtonContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-top: 3em;
      
`
export const Matches = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5px;    
`
export const Texto = styled.p`
    background-color: white;
    padding-left: 10px;
    margin: auto;
`
export const Titulo = styled.strong`
    background-color: white;
    padding: 15px;
    display: flex;
    justify-content: center;
`
export const ButtonVoltar = styled.button`
        border-radius: 15px;
        width: 17em;
         height: 1.5em;
         border: 1px solid purple;
        color: purple;
        font-size: 1.5em;
        background-color: white;
        &:hover{ background: purple}
        &:hover{color: white};  
        justify-content: center;

`

export const ButtonResetar = styled.button`
        border-radius: 15px;
        width: 17em;
         height: 1.5em;
         border: 1px solid red;
        color: red;
        font-size: 1.5em;
        background-color: white;
        &:hover{ background: red}
        &:hover{color: white};  
        justify-content: center;

`