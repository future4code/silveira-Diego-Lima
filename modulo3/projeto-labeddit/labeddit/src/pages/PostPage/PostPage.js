import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading"
import { BASE_URL } from "../../constants/urls";
import { TelaPost, StyledButton } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, FormContainer } from "./styled"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField';
import { createComment } from "../../services/user";
import CommentContainer from "../PostPage/CommentCard"
import CircularProgress from '@material-ui/core/CircularProgress'


const PostPage = () => {
    useProtectdPage()
    const params = useParams()
    const [form, onChange, clear] = useForm({ body: "" })
    const [isLoading, setIsLoading] = useState(false)
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]   


    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, params.id, setIsLoading)

    }

    const commentsCard = comments && comments.map((comments) => {
        return (
            <CommentContainer key={comments.id}
                username={comments.username}
                userVote={comments.userVote}
                body={comments.body}
                votos={comments.voteSum}
                id={comments.id}                
            />         
        )
    })


    return (
        <MainContainer>
            <TelaPost>
                <Header />
                <FormContainer onSubmit={onSubmitForm}>
                    <TextField id="outlined-basic" label="Digite seu texto" variant="outlined" size="small" margin="normal"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                        type={"text"}

                    />
                    <StyledButton type={'submit'} variant="contained" color="primary" margin="normal" >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Responder</>}
                    </StyledButton>
                </FormContainer>
                {commentsCard.length > 0 ? commentsCard : <Loading/> }
            </TelaPost>
        </MainContainer>
    )
}
export default PostPage;