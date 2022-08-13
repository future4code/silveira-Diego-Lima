import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../Constants/urls';
import GlobalStateContext from './GlobalStateContext';



function GlobalState({ children }) {
    const [restaurants, setRestaurants] = useState([]);
    const [categoryRestaurant, setCategoryRestaurant] = useState([])
    const [cart, setCart] = useState([]);
    const [addressUser, setAddressUser] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState({})
    const [activeOrder, setActiveOrder] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);
    const [userStats, setUserStats] = useState([]);


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
                console.log(res.data)
                setActiveOrder(res.data.order)
                const expiresAt = res.data.order.expiresAt
                console.log((expiresAt - new Date().getTime())/60000)
                setTimeout(() => {
                    getActiveOrder()
                }, expiresAt - new Date().getTime())

            }).catch((error) => console.log(error.message));
    }
    const getOrderHistory = () => {//pega a historico de pedidos do usuario
        axios.get(`${BASE_URL}/orders/history`, headers)
            .then((response) => {
                setOrderHistory(response.data.orders);

            }).catch((error) => console.log(error.message));
    }

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, headers)
            .then((response) => {
                setUserStats(response.data);
            }).catch((error) => console.log(error));
    }
    useEffect(() => {
        getRestaurantList();
        getAddressUser();
        getActiveOrder();


        getOrderHistory();
        getProfile();

    }, []);

    const requests = { addToCart, removeToCart }

    const states = { restaurants, categoryRestaurant, cart, addressUser, paymentMethod, currentRestaurant, activeOrder }

    const setters = { setPaymentMethod, setActiveOrder }



    return (
        <GlobalStateContext.Provider value={{ requests, states, setters }}>
            {children}
        </GlobalStateContext.Provider>

    )
}

export default GlobalState