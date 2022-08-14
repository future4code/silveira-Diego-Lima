import styled from 'styled-components';
import { ReactComponent as EditIcon } from "../../Assests/edit.svg";

export const App = styled.div`
    width: 100vw;
    height: 100vh;

    h4{
        margin: 0 21px;
    }
`
export const Hr = styled.div`
    background: lightgray;
    width: 100%;
    height: 1px;
`

export const EditUser = styled.div`
    display: flex;
    flex-direction: column;
       
`
export const EditUserAddress = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eee;
   
`
export const DivUserStats = styled.div`
    width:100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    strong{
        font-family: Roboto;
        margin: 0.5rem 0 0;
        letter-spacing: -0.39px;
        color: #000;;
    }
`
export const ConteinerIcone = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
`
export const ConteinerUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    p{  
        font-family: Roboto;
        margin: 0.5rem 0 0;
        letter-spacing: -0.39px;
        color: #b8b8b8;

    }
    strong{
        font-family: Roboto;
        margin: 0.5rem 0 0;
        letter-spacing: -0.39px;
        color: #000;;
    }

`

export const Hr2 = styled.div`
    background: black;
    width: 95%;
    height: 1px;
    margin: 5px auto;
`
export const ConteinerHistory = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: Roboto;
    h3{
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        margin: 1rem 1rem 0.5rem;;
    }
`


export const ContainerCardHistory = styled.div`
border: solid black 1px;
margin: 3vh; 
box-shadow: 1px;
`

export const StyledTextHistory = styled.div`
margin: 8px;
`

export const EditIconStyled = styled(EditIcon)`
`