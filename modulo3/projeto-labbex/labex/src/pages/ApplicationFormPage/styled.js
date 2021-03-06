import  styled from "styled-components"


export const FormContainer = styled.form`
    width: 70vw;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12px;
    background-color: white;
    `
export const ApplicationContainer = styled.div`
    height: 100vh; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', cursive;
    background-color: green;
    color: black;
    `

export const Titulo = styled.div`
    width: 70vw;
    font-size: 2em;
    display: flex;
`    
export const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 3em;
    
`
export const InputLabel = styled.input`
    width: 25em;
    margin: 2px;
    padding: 10px;
    border-radius: 1em;
`
export const SelectLabel = styled.select`
    width: 25em;
    margin: 2px;
    padding: 10px;
    border-radius: 1em;
`