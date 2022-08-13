import React, { useState } from 'react'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant';
import Header from '../../Components/Header/Header';
import { useGlobal } from '../../Global/GlobalStateContext';
import useProtectedPage from '../../Hoocks/useProtectedPage';
import { BoxInputSearch, CardsRestaurant, ContainerFeed, InputSearch, MenuTop, MenuItem } from './styled';
import Menu from '../../Components/Menu/Menu';
import Order from '../../Components/Order/Order';



const Feed = () => {
  useProtectedPage()
  const { states, setters } = useGlobal()
  const { restaurants, categoryRestaurant, activeOrder } = states
  const { setCategoryRestaurant, setActiveOrder } = setters
  const [inputText, setInputText] = useState('')
  const [valueCategory, setValueCategory] = useState('')


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
    console.log(categoryRestaurant)
  }


  return (
    <ContainerFeed>
      <Header title={"Ifuture"} />
      <BoxInputSearch>
        <InputSearch
          value={inputText}
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