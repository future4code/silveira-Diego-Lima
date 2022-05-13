import styled from "styled-components";



export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh ;
    background-color: grey;
`    
export const PostContainer = styled.input`
    display: flex;
    justify-items: center;
    margin-top: 2em;
    width: 364px;
    left: 30px;
    top: 124px;
    border-radius: 12px;
    background: #EDEDED;
`
export const CommentContainer = styled.div`
    width: 364px;
    left: 31px;
    top: 541px;
    border-radius: 12px;
    padding: 10px;
    background: #EDEDED;
    margin: 10px;
`

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    `