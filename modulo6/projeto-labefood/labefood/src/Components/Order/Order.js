import React from 'react'
import { useGlobal } from '../../Global/GlobalStateContext'
import { BoxInform, ClockStyled, OrderContainer, OrderContainerSpace, RestaurantName, Title, TotalPrice } from './styled'

const Order = () => {
    const { states,  } = useGlobal()
    const { activeOrder } = states
    const { totalPrice, restaurantName } = activeOrder

     
    return (
        <>
            <OrderContainer>
                <ClockStyled />
                <BoxInform>
                    <Title>
                        Pedido em andamento
                    </Title>
                    <RestaurantName>
                        {restaurantName}
                    </RestaurantName>
                    <TotalPrice>
                        SUBTOTAL
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalPrice)}
                    </TotalPrice>
                </BoxInform>
            </OrderContainer>
            <OrderContainerSpace></OrderContainerSpace>
        </>
    )
}

export default Order