import styled from "styled-components";
import { ReactComponent as Home } from "../../Assests/homepage.svg";
import { ReactComponent as Cart } from "../../Assests/shopping-cart.svg";
import { ReactComponent as Profile } from "../../Assests/avatar.svg";


export const MenuContainer = styled.nav`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 3.063rem;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
    background-color: #fff;
    position: fixed;
    bottom: 0rem;
   
`
export const MenuContainerSpace = styled.div`
    height: 3.062rem;
`

export const ProfileStyled = styled(Profile)`
    fill: ${(p) => p.pageCurrent ? "red" : "#B88B8B8"};
`


export const CartStyled = styled(Cart)`
   fill: ${(p) => p.pageCurrent ? "red" : "#B88B8B8"};

`

export const HomeStyled = styled(Home)`
    fill: ${(p) => p.pageCurrent ? "red" : "#B88B8B8"};
`