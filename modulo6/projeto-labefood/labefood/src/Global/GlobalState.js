import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../Constants/urls';
import GlobalStateContext from './GlobalStateContext';


function GlobalState({ children }) {
    const [cart, setCart] = useState([]);
    const [addressUser, setAddressUser] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState({})
    const [activeOrder, setActiveOrder] = useState(null);


    const headers = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    }

    const addToCart = (product, quantity, restaurant) => {
        if (restaurant.id === currentRestaurant.id) {
            setCart([...cart, { ...product, quantity }])
        } else {
            setCart([{ ...product, quantity }])
            setCurrentRestaurant(restaurant)
        }
    }
    const removeToCart = (id) => {
        const index = cart.findIndex((product) => product.id === id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const getAddressUser = () => {//pega endereço do usuario
        axios.get(`${BASE_URL}/profile`, headers)
            .then((response) => {
                setAddressUser(response.data.user.address);
            }).catch((error) => console.log(error.message));
    }
    const getActiveOrder = () => {//pega pedido ativo do usuario
        axios.get(`${BASE_URL}/active-order`, headers)
            .then((res) => {
                setActiveOrder(res.data.order)
         
                const expiresAt = res.data.order.expiresAt
                
                setTimeout(() => {
                    getActiveOrder()
                }, expiresAt - new Date().getTime())

            }).catch((error) => {
                // console.log(error.message);
            })
    }

    useEffect(() => {
        getAddressUser();
        getActiveOrder();

    }, [activeOrder]);

    const requests = { addToCart, removeToCart }

    const states = { cart, addressUser, paymentMethod, currentRestaurant, activeOrder }

    const setters = { setPaymentMethod, setActiveOrder, setCart, setCurrentRestaurant }



    return (
        <GlobalStateContext.Provider value={{ requests, states, setters }}>
            {children}
        </GlobalStateContext.Provider>

    )
}

export default GlobalState