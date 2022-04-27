import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 5em;
    width: 30em;
    height: 30em;
    padding: 5px;
    flex-direction: column;
    background-color: white;
    border: 1px black solid;
    border-radius: 8px;
` 
export const DivImage = styled.img`
    width: 18em;
    height: 15em;
    padding: 1em;
    background-color: white;    
    border-radius: 2em;      
`

export const HeaderContainer = styled.div`
        width: 26em;
        height: 3em;
        display: flex;
        justify-content: space-around;
        background-color: white;
        align-items: center;        
`
export const Nome = styled.p`
      background-color: white;
      margin-bottom: 5px;
      margin-top: 5px;

`
export const ButtonsContainer = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100%;
        background-color: white;
        padding: 5px;
`
export const Imagem = styled.img`
	width: 10em;
        display: flex;        
`   
export const ButtonLike = styled.button`
        border-radius: 1em;
        width: 2em;
         height: 2em;
         border: 1px solid green;
        color: green;
        font-size: 2em;
        background-color: white;
        &:hover{ background: green}
        &:hover{color: white};               
`
export const ButtonDeslike = styled.button`
        border-radius: 1em;
        width: 2em;
        height: 2em;
        border: 1px solid red;
        color: red;
        font-size: 2em;
        background-color: white;
        &:hover{ background: red}
        &:hover{color: white};               
`
export const ButtonMatches = styled.button`
        border-radius: 15px;
        width: 5em;
        height: 1.5em;
        border: 1px solid purple;
        color: purple;
        font-size: 1.5em;
        background-color: white;
        &:hover{ background: purple}
        &:hover{color: white};    
`