import  styled from "styled-components"

export const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em;    
`
export const AdmContainer = styled.div`
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
export const TripsContainer = styled.div`
    width: 70vw;
    max-width: 500px;
    align-content: stretch;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: 1px black solid;
    margin-top: 12px;
    cursor: pointer;
    &:hover{ background: green}
    &:hover{color: white};
    `
export const DeleteContainer =styled.button` 
     &:hover{ background: red}
    &:hover{color: white};
    max-width: 6em;
    display: flex;
    justify-content: end;
    border: 1px black solid;   

`
export const BotaoDelete = styled.button`
     background-color: white;  
    &:hover{ background: red}
    &:hover{color: white};
    color  : red ;
    border-radius: 15px;
    border: 1px solid black;
    height: 3em;
    width: 3em;
`