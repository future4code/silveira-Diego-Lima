import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from "axios";



function GlobalState(props) {
    const [restaurants, setRestaurants] = useState([]);


    const headers = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    }


    const getRestaurantList = () => {

        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((response) => {
                setRestaurants(response.data.restaurants);
            }).catch((error) => console.log(error));
    }


    useEffect(() => {
        getRestaurantList();

    }, []);

    const data = {

    }

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )
}

export default GlobalState