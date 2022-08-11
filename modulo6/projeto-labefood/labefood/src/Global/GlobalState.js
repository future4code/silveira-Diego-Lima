import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from "axios";
import { BASE_URL } from '../Constants/urls';



function GlobalState(props) {
    const [restaurants, setRestaurants] = useState([]);
    const [categoryRestaurant, setCategoryRestaurant] = useState([])


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

    useEffect(() => {
        getRestaurantList();

    }, []);

    const data = {
        restaurants,
        setRestaurants,
        categoryRestaurant,
        setCategoryRestaurant,




    };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )
}

export default GlobalState