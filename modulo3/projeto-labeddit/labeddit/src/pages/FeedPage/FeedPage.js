import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading"
import { BASE_URL } from "../../constants/urls";
import { TelaFeed } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, ReactPaginateContainer } from "./styled";
import FeedCard from "../../components/FeedCard/FeedCard"
import AddPost from "./AddPost";




const FeedPage = () => {
    useProtectdPage()
    const [feedPost, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [pageNumber, setPageNumber] = useState(0);

    const cardsPerPage = 4;
    const pagesVisited = pageNumber * cardsPerPage;



    const feedCards = feedPost && feedPost.slice(pagesVisited, pagesVisited + cardsPerPage).map((post) => {
        return (
            <FeedCard
                key={post.id}
                
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

    const pageCount = Math.ceil(feedPost.length / cardsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <MainContainer>
            <TelaFeed>
                <Header />
                <AddPost getPost={getPost} />
                {feedCards.length > 0 ? feedCards : <Loading />}
                <ReactPaginateContainer
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </TelaFeed>
        </MainContainer>
    )

}

export default FeedPage;