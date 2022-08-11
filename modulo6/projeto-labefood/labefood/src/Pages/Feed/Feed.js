import React, { useContext, useState } from 'react'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant';
import Header from '../../Components/Header/Header';
import { GlobalStateContext } from '../../Global/GlobalStateContext';
import useProtectedPage from '../../Hoocks/useProtectedPage';
import { BoxInputSearch, CardsRestaurant, ContainerFeed, InputSearch, Menu, MenuItem } from './styled';



const Feed = () => {
  useProtectedPage()

  const { restaurants } = useContext(GlobalStateContext);
  const [inputText, setInputText] = useState('')
  const { categoryRestaurant, setCategoryRestaurant } = useContext(GlobalStateContext);
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
      <Menu>
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


      </Menu>
      <CardsRestaurant>
        {filterRestaurant}
      </CardsRestaurant>
    </ContainerFeed>
  )
}

export default Feed