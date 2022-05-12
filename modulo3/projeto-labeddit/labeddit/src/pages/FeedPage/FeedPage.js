import React from "react";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { TelaFeed, StyledButton } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, PostContainer } from "./styled";
import FeedCard from "../../components/FeedCard/FeedCard"
import {goToPost} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";


const FeedPage = () => {
    useProtectdPage()
    const navigate = useNavigate()
    const feedPost = useRequestData([], `${BASE_URL}/posts`)
    console.log(feedPost)

    const onClickCard = (id) => {
        goToPost(navigate , id)

    } 

    const feedCards = feedPost.map((post) => {
        return (
            <FeedCard
                key={post.id}
                autor={post.username}
                texto={post.body}
                votoS={post.voteSum}
                comentarios={post.commentCount}
                onClick ={ () => onClickCard(post.id) }
            />
        )
    })

    return (
        <MainContainer>
            <TelaFeed>
                <Header />
                <PostContainer>
                </PostContainer>
                <StyledButton variant="contained" color="primary" margin="normal" >
                    Postar
                </StyledButton>

                {feedCards}

            </TelaFeed>
        </MainContainer>
    )

}

export default FeedPage;