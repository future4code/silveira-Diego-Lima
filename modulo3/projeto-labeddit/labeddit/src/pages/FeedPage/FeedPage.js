import React from "react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading"
import { BASE_URL } from "../../constants/urls";
import { TelaFeed } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer } from "./styled";
import FeedCard from "../../components/FeedCard/FeedCard"
import AddPost from "./AddPost";



const FeedPage = () => {
    useProtectdPage()
    const [feedPost, getPost] = useRequestData([], `${BASE_URL}/posts`)



    const feedCards = feedPost.map((post) => {
        return (
            <FeedCard
                key={post.id}
                // onClick={() => onClickCard(post.id)}
                id={post.id}
                username={post.username}
                titulo={post.title}
                post={post.body}
                comentario={post.commentCount}
                votos={post.voteSum}
                userVote={post.userVote}
                getPost={getPost}
            >
            </FeedCard>
        )
    })

    return (
        <MainContainer>
            <TelaFeed>
                <Header />
                <AddPost getPost={getPost} />
                {feedCards.length > 0 ? feedCards : <Loading/> }
            </TelaFeed>
        </MainContainer>
    )

}

export default FeedPage;