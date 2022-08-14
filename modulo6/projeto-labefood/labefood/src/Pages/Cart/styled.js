import { FormLabel } from '@mui/material'
import styled from 'styled-components'



export const AddressUser = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    background-color: #eeeeee;
    font-family: 'Roboto';
    align-items: flex-start;
    h3{
       color: #b8b8b8;
       letter-spacing: -0.39px;
    }
    p{
        color: #000000;
        letter-spacing: -0.39px;
        margin-top: -0.25rem;
    }


`
export const AddressRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    font-family: 'Roboto';
    align-items: flex-start;
    p{
        color:#b8b8b8;
        letter-spacing: -0.39px;
        margin-top: -0.25rem;
    }
    
    
`
export const ContainerCart = styled.div`
    width: 100vw;
    height: 102vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const FormLabelStyled = styled(FormLabel)`
    height: 1.125rem;
    margin: 1.5rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`
export const Shipping = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p{
        margin: 1rem 1rem 0.813rem 3.75rem
    }
`

export const ContainerSubTotal = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        margin: 0.813rem 1rem 1.5rem 0;
        font-family: Roboto;
        font-size: 1.125rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.43px;
        text-align: right;
        color: #e8222e;
    }
    h3 {
        margin: 0.938rem 0 1.563rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
    }
`

export const NameProduct = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: #e8222e;
    padding-bottom: 0.25rem;
    padding-top: 1rem;
    margin-top: -0.3rem;
`

export const Hr = styled.div`
    background: black;
    width:  90vw;
    height: 1px;
    margin: 5px auto;
`

export const CardContainer = styled.div`
    margin: 0 1rem 0 0.7rem;
`