import React from 'react'
import { DeliveryDate, OrderContainer, RestaurantName, TotalPrice } from './styled'

const CardOrderHistory = ({ order, date }) => {


    const formatarData = (date) => {

        var partes = date.split('/').map(Number);
        var data = new Date(partes[2], partes[1] - 1, partes[0]);
        return data.toLocaleString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <OrderContainer>
         

                <RestaurantName>
                    {order.restaurantName}
                </RestaurantName>
                <DeliveryDate>
                    {formatarData(date)}
                </DeliveryDate>
                <TotalPrice>
                    SUBTOTAL R$ {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(order.totalPrice)}
                </TotalPrice>
           
        </OrderContainer>
    )
}

export default CardOrderHistory