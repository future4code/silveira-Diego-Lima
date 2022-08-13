import styled from "styled-components";
import { ReactComponent as Clock } from '../../Assests/clock.svg';


export const OrderContainer = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    height: 7.375rem;    
    background-color: #e8222e;
    position: fixed;
    z-index: 2;
    bottom: 3.062rem;
    padding: 0 0 0 2rem;
   
`
export const OrderContainerSpace = styled.div`
    height: 3.062rem;
`
export const ClockStyled = styled(Clock)`
`

export const BoxInform = styled.div``

export const RestaurantName = styled.p`
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
    padding: 0.25rem;
`

export const TotalPrice = styled.p`
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 0.25rem;
`

export const Title = styled.h3`
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
    padding: 0.25rem;
`