import styled from "styled-components"

export const PlaylistCard = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 15px;
    padding: 15px;
    margin: 10px;
    width: 25em;
    background-color: #d9e3f0;
    
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

export const BotaoAcessar = styled.button`
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
    align-items: center;
    flex-direction: column;
`

export const DivInput = styled.div`
     
    display: flex;
    justify-content: space-between;
    width: 25em;
    padding-top: 5em;
    padding-bottom: 2em;
    
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