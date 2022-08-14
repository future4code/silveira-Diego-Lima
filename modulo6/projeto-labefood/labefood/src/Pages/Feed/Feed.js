import React, { useEffect, useState } from 'react'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant';
import Header from '../../Components/Header/Header';
import { useGlobal } from '../../Global/GlobalStateContext';
import useProtectedPage from '../../Hoocks/useProtectedPage';
import { BoxInputSearch, CardsRestaurant, ContainerFeed, InputSearch, MenuTop, MenuItem } from './styled';
import Menu from '../../Components/Menu/Menu';
import Order from '../../Components/Order/Order';
import { BASE_URL } from '../../Constants/urls';
import axios from 'axios';



const Feed = () => {
  useProtectedPage()
  const { states } = useGlobal()
  const [restaurants, setRestaurants] = useState([]);
  const [categoryRestaurant, setCategoryRestaurant] = useState([])
  const { activeOrder } = states
  const [inputText, setInputText] = useState('')
  const [valueCategory, setValueCategory] = useState('')

  const headers = {
    headers: {
      Auth: localStorage.getItem('token')
    }
  }
  const getRestaurantList = () => {

    axios.get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants)
        filterCategory(res.data.restaurants)

      }).catch((error) => console.log(error));
  }

  const filterCategory = (restaurants) => {
    const arrayAux = []
    restaurants && restaurants.map((res) => {
      arrayAux.push(res.category)
    })
    const noRepeat = [... new Set(arrayAux)]

    const changeObjectArray = []
    noRepeat.map((category) => {
      const insertObj = { category, select: false }
      changeObjectArray.push(insertObj)
    })
    setCategoryRestaurant(changeObjectArray)
  }


  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true
    )
    .filter((restaurant) =>
      valueCategory ? restaurant.category.toLocaleLowerCase().includes(valueCategory.toLocaleLowerCase()) : true
    )
    .map((restaurant) => {
      return <CardRestaurant key={restaurant.id} restaurant={restaurant} />
    })

  const changeCategory = (category) => {
    setValueCategory(category)

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          select: true
        }
      } else {
        return {
          ...cat,
          select: false
        }
      }
    })
    setCategoryRestaurant(result)
  }

  useEffect(() => {
    getRestaurantList()
  }, )

  return (
    <ContainerFeed>
  
      <Header title={"Ifuture"} />
      <BoxInputSearch>
        <InputSearch
          value={inputText}
          placeholder={"Restaurante"}
          onChange={(event) => setInputText(event.target.value)}
        />
      </BoxInputSearch>
      <MenuTop>
        <MenuItem
          select={false}
          onClick={() => changeCategory('')}
        >
          Todos
        </MenuItem>
        {categoryRestaurant.map((category) => {
          return (<MenuItem
            key={category.category}
            select={category.select}
            onClick={() => changeCategory(category.category)}
          >
            {category.category}
          </MenuItem>
          )
        })}
      </MenuTop>
      <CardsRestaurant>
        {filterRestaurant}
      </CardsRestaurant>
      {activeOrder && <Order />}
      <Menu page={"home"} />
    </ContainerFeed>
  )
}

export default Feed