import styled from 'styled-components'
import { StyledButton } from '../../Global/GlobalStyled'


export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const MainCart = styled.div`
    display: flex;
    height: 5%;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`
export const AddressUser = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    height: 10%;
    background-color: lightgrey;
    font-family: 'Roboto';
    font-size: 1.2rem;
`
export const AddressRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 10%;
    justify-content: space-around;
    border: 1px solid black;
    font-family: 'Roboto';
    font-size: 1.2rem;
`
export const ContainerPayment = styled.div`
    padding: 10px;
    margin-top: 2em;
`
export const ContainerCart = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`


export const CartCard =styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
    
`

export const CardContainer =styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
`

export const ImgContainer = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Info = styled.p`
    margin: 10px;
`

export const ButtonRemove = styled(StyledButton)`
    width: 100px;

`