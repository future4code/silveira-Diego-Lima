import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/login'
import SignUp from '../Pages/SignUp/signUp'
import SignUpAddress from "../Pages/SignUpAddress/signUpAddress"
import Feed  from '../Pages/Feed/Feed'
import Restaurant from "../Pages/Restaurant/Restaurant"
import Cart from '../Pages/Cart/cart'
import Profile from '../Pages/Profile/Profile'
import ProfileEdit from '../Pages/ProfileEdit/ProfileEdit'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/signUp/address' element={<SignUpAddress />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/feed/:restaurantId' element={<Restaurant />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/:id' element={<ProfileEdit />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router