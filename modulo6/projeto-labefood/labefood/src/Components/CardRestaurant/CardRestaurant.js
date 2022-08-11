import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../Routes/coordinator'
import { BoxInfoTimePrice, ContainerCardRestaurant, ImageRestaurant, InfoTimePrice, NameRestaurant } from './styled'


const CardRestaurant = ({ restaurant }) => {

    const navigate = useNavigate()


    return (
        <ContainerCardRestaurant onClick={() => goToRestaurant(navigate, restaurant.id)}>
            <ImageRestaurant src={restaurant.logoUrl} />
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <BoxInfoTimePrice>
                <InfoTimePrice>{restaurant.deliveryTime}</InfoTimePrice>
                <InfoTimePrice>{restaurant.shipping}</InfoTimePrice>
            </BoxInfoTimePrice>
        </ContainerCardRestaurant>
    )
}

export default CardRestaurant