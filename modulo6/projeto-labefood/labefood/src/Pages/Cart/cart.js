import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../../Components/CardProduct/CardProduct'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Order from '../../Components/Order/Order'
import { BASE_URL } from '../../Constants/urls'
import { useGlobal } from '../../Global/GlobalStateContext'
import { StyledButton } from '../../Global/GlobalStyled'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import PaymentMethod from './PaymentMethod'
import { ContainerCart, AddressUser, AddressRestaurant, ContainerPayment, ContainerSubTotal, Shipping } from './styled'

const Cart = () => {
  useProtectedPage()
  const { states, setters } = useGlobal()
  const { addressUser, cart, currentRestaurant, paymentMethod, activeOrder } = states
  const { setActiveOrder } = setters
  const [fullPrice, setFullPrice] = useState(0)

  
  const TotalPrice = () => {
    let totPrice = 0
    const frete = currentRestaurant.shipping
    for (const product of cart) {
      totPrice += product.price * product.quantity + frete
    }
    setFullPrice(totPrice)
  }

  const placeOrder = async () => {
    const body = {
      products: cart.map((product) => {
        return ({
          id: product.id,
          quantity: product.quantity
        })

      }),
      paymentMethod: paymentMethod
    }
    await axios.post(`${BASE_URL}/restaurants/${currentRestaurant.id}/order`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((res) => {
        setActiveOrder(res.data.order)
      })
      .catch((err) => {
        console.log(err.response)
        alert(err.data.message)
      })
  }

  const onSubmitPlaceOrder = (event) => {
    event.preventDefault()
    placeOrder()
  }


  useEffect(() => {
    TotalPrice()
  }, [])

  return (
    <ContainerCart>
      <Header title={"Meu Carrinho"} back />

      <AddressUser>
        <p>Endereço de entrega</p>
        <p>{addressUser}</p>
      </AddressUser>
      <AddressRestaurant>
        <p>{currentRestaurant.name}</p>
        <p>{currentRestaurant.address}</p>
        <p>{currentRestaurant.deliveryTime} min</p>
      </AddressRestaurant>
      {cart && cart.length > 0 ? cart.map((product) => {
        return (
          <CardProduct
            key={product.id}
            product={product}
            restaurant={currentRestaurant}
          />
        )
      }) : <p>Carrinho vazio</p>}

      <ContainerPayment>
        <Shipping>
          Frete
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(currentRestaurant.shipping ? currentRestaurant.shipping : 0)}

        </Shipping>
        <ContainerSubTotal>
          <p>Subtotal</p>
          <p>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(fullPrice ? fullPrice : 0)}

          </p>

        </ContainerSubTotal>

      </ContainerPayment>
      <div>
        <PaymentMethod />
        <StyledButton color='primary' variant="contained" onClick={onSubmitPlaceOrder}> Gerar Pedido</StyledButton>
      </div>
      {activeOrder && <Order />}
      <Menu page={"cart"} />
    </ContainerCart >
  )
}

export default Cart