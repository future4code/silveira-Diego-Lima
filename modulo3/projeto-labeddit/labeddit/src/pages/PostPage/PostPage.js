import React from "react";
import Header from "../../components/Header/Header";
import { TelaPost } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";


const PostPage = () => {
    useProtectdPage()

    return (
        <TelaPost>
            <Header />
            PostPage!!!!!!
        </TelaPost>
    )

}

export default PostPage;