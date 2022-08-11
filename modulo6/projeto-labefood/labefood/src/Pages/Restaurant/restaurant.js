import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct/CardProduct'
import CardRestaurantDetails from '../../Components/CardRestaurantDetails/CardRestaurantDetails'
import { BASE_URL } from '../../Constants/urls'
import { CardRestaurant, ContainerRestaurant } from './styled'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({})
  const { restaurantId } = useParams()

  console.log(restaurant)

  const getRestaurant = () => {
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setRestaurant(res.data.restaurant)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getRestaurant()
  }, []);

  return (
    <ContainerRestaurant>
      <CardRestaurant>
        <CardRestaurantDetails restaurant={restaurant} />
        {
          restaurant.products && restaurant.products.map((product) => {
            return <CardProduct product={product} key={product.id} />
          })

        }
      </CardRestaurant>

    </ContainerRestaurant>
  )
}

export default Restaurant