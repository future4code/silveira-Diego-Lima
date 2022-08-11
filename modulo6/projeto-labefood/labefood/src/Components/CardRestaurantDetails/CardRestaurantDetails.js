import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxInfo, ContainerCardRestaurantDetails, ImageRestaurant, Infos, NameRestaurant } from './styled'


const CardRestaurantDetails = ({ restaurant }) => {

    
    return (
        <ContainerCardRestaurantDetails >
            <ImageRestaurant src={restaurant.logoUrl} />
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <Infos>{restaurant.category}</Infos>
            <BoxInfo>
                <Infos>{restaurant.deliveryTime} min</Infos>
                <Infos>Frete R$ {restaurant.shipping}</Infos>
            </BoxInfo>
            <Infos>{restaurant.address}</Infos>
        </ContainerCardRestaurantDetails>
    )
}

export default CardRestaurantDetails