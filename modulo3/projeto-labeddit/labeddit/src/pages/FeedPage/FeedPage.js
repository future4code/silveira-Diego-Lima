import React from "react";
import Header from "../../components/Header/Header";
import { TelaFeed } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import { MainContainer } from "./styled";


const FeedPage = () => {
    useProtectdPage()

    return (
        <MainContainer>
        <TelaFeed>
            <Header />
            FeedPage!!!!!!
        </TelaFeed>
        </MainContainer>
    )

}

export default FeedPage;