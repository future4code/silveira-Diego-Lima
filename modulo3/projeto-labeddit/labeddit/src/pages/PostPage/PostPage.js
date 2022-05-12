import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { TelaPost, StyledButton } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, PostContainer, CommentContainer } from "./styled"


const PostPage = () => {
    useProtectdPage()
    const params = useParams()
    const post = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)
    console.log(post)
    return (
        <MainContainer>
            <TelaPost>
                <Header />
                <PostContainer>
                </PostContainer>
                <StyledButton variant="contained" color="primary" margin="normal" >
                    Responder
                </StyledButton>


                {post && post.map((comments) => {
                    return (
                        <CommentContainer key={comments.id}>
                            <p>Enviado por: {comments.username}</p>
                            <p>{comments.body}</p>
                            <div>votos {comments.voteSum}</div>

                        </CommentContainer>
                    )
                })}
            </TelaPost>
        </MainContainer>
    )
}
export default PostPage;