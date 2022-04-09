import styled from "styled-components"

export const MusicCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    &:hover{
        cursor: pointer;
        background-color: aliceblue;}
`

export const BotaoDelete =styled.button`
 &:hover{ background: red}
 &:hover{color: white};
  color  : red ;
  border-radius: 5px;
  border: 1px solid black;
  height: 20px;
  `