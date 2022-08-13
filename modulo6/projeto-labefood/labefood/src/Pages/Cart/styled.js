import { FormLabel } from '@mui/material'
import styled from 'styled-components'
import { StyledButton } from '../../Global/GlobalStyled'



export const AddressUser = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    background-color: lightgrey;
    font-family: 'Roboto';
    align-items: flex-start;
`
export const AddressRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    font-family: 'Roboto';
    align-items: flex-start;
    
`
export const ContainerPayment = styled.div`
    display: flex;
    padding: 10px;
    margin-top: 2em;
`
export const ContainerCart = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const FormLabelStyled = styled(FormLabel)`
    width: 20.5rem;
    height: 1.125rem;
    margin: 1.5rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`
export const Shipping = styled.div`
`

export const ContainerSubTotal = styled.div`
`