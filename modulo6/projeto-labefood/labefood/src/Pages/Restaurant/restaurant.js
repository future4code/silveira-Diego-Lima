import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../../Components/CardProduct/CardProduct'
import CardRestaurantDetails from '../../Components/CardRestaurantDetails/CardRestaurantDetails'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { BASE_URL } from '../../Constants/urls'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import { CardRestaurant, Category, ContainerRestaurant, Hr, SectionProductByCategory } from './styled'

const Restaurant = () => {
  useProtectedPage()
  const [restaurant, setRestaurant] = useState({})
  const { restaurantId } = useParams()
  const [categories, setCategories] = useState([])


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
  }, [])

  useEffect(() => {
    if (restaurant.products) {

      const newCategories = []
      for (const product of restaurant.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category)
        }
      }
      setCategories(newCategories)
    }
  }, [restaurant])


  return (
    <ContainerRestaurant>
      <Header title={"Restaurante"} back />
      <CardRestaurant>
        <CardRestaurantDetails restaurant={restaurant} />
        {
          restaurant.products
          &&
          categories.map((category) => {
            return <SectionProductByCategory>
              <Category>{category}</Category>
              <Hr></Hr>
              {restaurant.products
                .filter((product) => {
                  return product.category === category
                })
                .map((product) => {
                  return <CardProduct product={product} key={product.id} restaurant={restaurant} />
                })
              }
            </SectionProductByCategory>
          })
        }

      </CardRestaurant>
      <Menu  />
    </ContainerRestaurant>
  )
}

export default Restaurant