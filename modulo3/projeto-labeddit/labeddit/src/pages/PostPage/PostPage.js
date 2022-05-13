import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { TelaPost, StyledButton } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, CommentContainer, FormContainer } from "./styled"
import useForm from "../../hooks/useForm"
import TextField from '@material-ui/core/TextField';
import { createComment } from "../../services/user";


const PostPage = () => {
    useProtectdPage()
    const params = useParams()
    const [form, onChange, clear] = useForm({ body: "" })
    const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)[0]
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form,clear,params.id)
        
    }

    const cardPost = post && post.map((comments) => {
        return (
            <CommentContainer key={comments.id}>
                <p>Enviado por: {comments.username}</p>
                <p>{comments.body}</p>
                <div>votos {comments.voteSum}</div>
            </CommentContainer>
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
                        Responder
                    </StyledButton>
                </FormContainer>
                {cardPost}
            </TelaPost>
        </MainContainer>
    )
}
export default PostPage;