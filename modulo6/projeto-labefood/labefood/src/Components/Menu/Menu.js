import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToCart, goToFeed, goToProfile } from '../../Routes/coordinator'
import { CartStyled, HomeStyled, MenuContainer, MenuContainerSpace, ProfileStyled } from './styled'

const Menu = ({ page }) => {

    const navigate = useNavigate()

    return (
        <>
            <MenuContainerSpace></MenuContainerSpace>
            <MenuContainer>
                <HomeStyled pageCurrent={page === "home"} onClick={() => goToFeed(navigate)} />
                <CartStyled pageCurrent={page === "cart"} onClick={() => goToCart(navigate)} />
                <ProfileStyled pageCurrent={page === "profile"}  onClick={() => goToProfile(navigate)}/>
            </MenuContainer>
        </>
    )
}

export default Menu