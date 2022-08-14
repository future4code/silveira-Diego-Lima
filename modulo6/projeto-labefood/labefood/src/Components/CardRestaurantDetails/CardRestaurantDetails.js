import React from 'react'
import { BoxInfo, BoxInfoRestaurant, ContainerCardRestaurantDetails, ImageRestaurant, Infos, NameRestaurant } from './styled'


const CardRestaurantDetails = ({ restaurant }) => {
    

    return (
        <ContainerCardRestaurantDetails >
            <ImageRestaurant src={restaurant.logoUrl} />
            
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <BoxInfoRestaurant>
            <Infos>{restaurant.category}</Infos>
            <BoxInfo>
                <Infos>{`${restaurant.deliveryTime} min`}</Infos>
                <Infos>Frete {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(`${restaurant.shipping}`)}</Infos>
            </BoxInfo>
            <Infos>{restaurant.address}</Infos>
            </BoxInfoRestaurant>
        </ContainerCardRestaurantDetails>
    )
}

export default CardRestaurantDetails