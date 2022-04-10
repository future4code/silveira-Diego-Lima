import styled from "styled-components"

export const MusicCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;         
    height: 20em;
    border-radius: 4em;
    padding: 1em;    
    width: 25em;
    background-color: #d9e3f0;
    
`
export const BotaoDelete =styled.button`
    background-color: white;  
    &:hover{ background: red}
    &:hover{color: white};
    color  : red ;
    border-radius: 15px;
     border: 1px solid black;
    height: 2em;
    width: 8em; 
`

export const BotaoVoltar= styled.button`
   background: green;
   &:hover{ background: black}
    &:hover{color: green};
  color  : white ;
  border-radius: 15px;
  border: 1px solid black;
  height: 3em;
  width: 15em;
  `
  

export const BotaoCriar = styled.button`
   background-color: #d9e3f0; 
   &:hover{ background: green}
    &:hover{color: white};
    color  : green ;
    border-radius: 15px;
    border: 1px solid black;
    height: 3em;
    width: 8em;
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivInput = styled.div`
     
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 5em;
    padding-bottom: 2em;
    border: 1px solid black;
    
`

export const Input = styled.input`
   background-color: #d9e3f0; 
    color  : green;
   border-radius: 15px;    
    padding: 10px;
    height: 3em;
    width: 15em;
    
`
export const Titulo =styled.h1`
    color: white;

` 
export const Musica = styled.iframe`
    margin: 10px;
    padding: 5px;

`
export const Texto = styled.p`
    display: flex;
    background: green;
   &:hover{ background: black}
    &:hover{color: green};
    color  : white ;
    border-radius: 15px;
    border: 1px solid black;   
    padding: 5px;
  `  