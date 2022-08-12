import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../Constants/urls';
import GlobalStateContext from './GlobalStateContext';



function GlobalState(props) {
    const [restaurants, setRestaurants] = useState([]);
    const [categoryRestaurant, setCategoryRestaurant] = useState([])
    const [activeOrder, setActiveOrder] = useState([]);
    const [productAdd, setProductAdd] = useState([]);
    const [addressUser, setAddressUser] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);
    const [userStats, setUserStats] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState([]);
    
    
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

    const getAddressUser = () => {//pega endereço do usuario
        axios.get(`${BASE_URL}/profile`, headers)
            .then((response) => {
                setAddressUser(response.data.user.address);
            }).catch((error) => console.log(error.message));
    }
    const getOrderHistory = () => {//pega a historico de pedidos do usuario
        axios.get(`${BASE_URL}/orders/history`, headers)
            .then((response) => {
                setOrderHistory(response.data.orders);
            }).catch((error) => console.log(error.message));
    }
    const getActiveOrder = () => {//pega pedido ativo do usuario
        axios.get(`${BASE_URL}/active-order`, headers)
            .then((response) => {
                setActiveOrder(response.data.order);
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
        getOrderHistory();
        getActiveOrder();
        getProfile();

    }, []);

    const data = {
        restaurants,
        setRestaurants,
        categoryRestaurant,
        setCategoryRestaurant,
        activeOrder,
        setActiveOrder,
        userStats,
        setUserStats,
        paymentMethod,
        setPaymentMethod,
        addressUser,
        setAddressUser,
        orderHistory,
        setOrderHistory

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