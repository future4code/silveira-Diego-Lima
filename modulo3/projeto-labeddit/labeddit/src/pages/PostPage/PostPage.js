import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading"
import { BASE_URL } from "../../constants/urls";
import { TelaPost, StyledButton } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, FormContainer, ReactPaginateContainer, Autor, PostContent, ButtonsContainer, ContainerOnTop } from "./styled"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField';
import { createComment } from "../../services/user";
import CommentContainer from "../PostPage/CommentCard"
import CircularProgress from '@material-ui/core/CircularProgress'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const PostPage = () => {
    useProtectdPage()
    const params = useParams()
    const [form, onChange, clear] = useForm({ body: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [feedPost ] = useRequestData([], `${BASE_URL}/posts`)
    const [pageNumber, setPageNumber] = useState(0);

    const commentsPerPage = 4;
    const pagesVisited = pageNumber * commentsPerPage;


    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, params.id, setIsLoading, getComments)

    }

    const PostComment = feedPost && feedPost.map((post) => {
        if (post.id === params.id)
            return (
                <ContainerOnTop key={post.id}>
                    <Autor>Enviado por: {post.username}</Autor>
                    <PostContent>{post.title}</PostContent>
                    <PostContent>{post.body}</PostContent>
                    <ButtonsContainer>
                        <ThumbUpAltOutlinedIcon color="primary" />
                        {post.voteSum}
                        <ThumbDownIcon color="primary" />
                    </ButtonsContainer>
                </ContainerOnTop>
            )
    })

    const commentsCard = comments && comments.slice(pagesVisited, pagesVisited + commentsPerPage).map((comments) => {
        return (
            <CommentContainer key={comments.id}
                username={comments.username}
                userVote={comments.userVote}
                body={comments.body}
                votos={comments.voteSum}
                id={comments.id}
                getComments={getComments}
            />
        )
    })
    const pageCount = Math.ceil(comments.length / commentsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <MainContainer>
            <TelaPost>
                <Header />
                {PostComment.length > 0 ? PostComment : <Loading/>}
                <FormContainer onSubmit={onSubmitForm}>
                    <TextField id="outlined-basic" label="Digite seu texto" variant="outlined" size="small" margin="normal"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                        type={"text"}

                    />
                    <StyledButton type={'submit'} variant="contained" color="primary" margin="normal" >
                        {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Responder</>}
                    </StyledButton>
                </FormContainer>
                {commentsCard.length > 0 ? commentsCard : <Loading />}
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
            </TelaPost>
        </MainContainer>
    )
}
export default PostPage;