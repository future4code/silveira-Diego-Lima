import React, {useState} from "react";
import { FormContainer } from "./styled"
import { StyledButton } from "../../global/GlobalStyled";
import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm"
import { createPost } from "../../services/user";
import CircularProgress from '@material-ui/core/CircularProgress'



const AddPost = (props) => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const [isLoading, setIsLoading] = useState(false)
    
    
    
    const onSubmitForm = (event) => {
        event.preventDefault()        
        createPost(form, clear,props.getPost, setIsLoading)        
    }

    return (

        <FormContainer onSubmit={onSubmitForm}>
            <TextField id="outlined-basic" label="Titulo" variant="outlined" size="small" margin="normal"
                name={"title"}
                value={form.title}
                onChange={onChange}
                required
                type={"text"}
            />
            <TextField id="outlined-basic" label="Digite seu texto" variant="outlined" size="small" margin="normal"
                name={"body"}
                value={form.body}
                onChange={onChange}
                required
                type={"text"}

            />
            <StyledButton type={'submit'} variant="contained" color="primary" margin="normal" >
            {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
            </StyledButton>

        </FormContainer>

    )

}

export default AddPost;