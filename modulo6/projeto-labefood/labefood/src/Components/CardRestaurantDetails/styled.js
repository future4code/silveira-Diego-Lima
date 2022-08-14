import styled from "styled-components";

export const ContainerCardRestaurantDetails = styled.div`
    width: 100%;
    margin: 0.5rem 0;
    border-radius: 8px;
`

export const ImageRestaurant = styled.img`
    width: 100%;
    height: 7.5rem;
    border-radius: 8px 8px 0 0 ;
    margin-bottom: 1rem;
`

export const NameRestaurant = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: #e8222e;
    margin-bottom: 0.625rem;
`
export const BoxInfo = styled.div`
    display: grid;
    grid-template-columns: 8rem 1fr;

  
`
export const Infos = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: #b8b8b8;
    margin-top: -0.025rem;

`
export const BoxInfoRestaurant = styled.div`
    display: flex;
    flex-direction: column;
   
`