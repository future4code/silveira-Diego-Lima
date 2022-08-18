import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct/CardProduct'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { BASE_URL } from '../../Constants/urls'
import { useGlobal } from '../../Global/GlobalStateContext'
import { ButtonStyled } from '../../Global/GlobalStyled'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import { goToFeed } from '../../Routes/coordinator'
import PaymentMethod from './PaymentMethod'
import { ContainerCart, AddressUser, AddressRestaurant, ContainerSubTotal, Shipping, NameProduct, CardContainer } from './styled'

const Cart = () => {
  useProtectedPage()
  const { states, setters } = useGlobal()
  const { addressUser, cart, currentRestaurant, paymentMethod } = states
  const { setActiveOrder, setCart, setCurrentRestaurant } = setters
  const [fullPrice, setFullPrice] = useState(0)

  const navigate = useNavigate()


  const TotalPrice = () => {
    let totPrice = 0
    const frete = currentRestaurant.shipping
    for (const product of cart) {
      totPrice += product.price * product.quantity
    }
    setFullPrice(totPrice + frete)
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
        setCart([])
        setCurrentRestaurant({})
        goToFeed(navigate)
      })
      .catch((err) => {
        alert(err.response.data.message)
        if (err.response.data.message === "Já existe um pedido em andamento") {
          setCart([])
          setCurrentRestaurant({})
          goToFeed(navigate)
        } else {

        }
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
        <h3>Endereço de entrega</h3>
        <p>{addressUser}</p>
      </AddressUser>

      <AddressRestaurant>
        <NameProduct>{currentRestaurant.name}</NameProduct>
        <p>{currentRestaurant.address}</p>
        <p>{currentRestaurant.deliveryTime && currentRestaurant.deliveryTime.length > 0 ? `${currentRestaurant.deliveryTime} min` : <></>}</p>
      </AddressRestaurant>

      <CardContainer>
        {cart && cart.length > 0 ? cart.map((product) => {
          return (
            <CardProduct
              key={product.id}
              product={product}
              restaurant={currentRestaurant}
            />
          )
        }) : <p>Carrinho vazio</p>}
      </CardContainer>

      <Shipping>
        <p>Frete <></>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(currentRestaurant.shipping ? currentRestaurant.shipping : 0)}
        </p>
      </Shipping>      
      <ContainerSubTotal>
        <h3>Subtotal</h3>
        <p>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(fullPrice ? fullPrice : 0)}
        </p>
      </ContainerSubTotal>
      
      <PaymentMethod />
      <ButtonStyled color='primary' variant="contained" onClick={onSubmitPlaceOrder}> Cofirmar</ButtonStyled>

      <Menu page={"cart"} />
    </ContainerCart >
  )
}

export default Cart