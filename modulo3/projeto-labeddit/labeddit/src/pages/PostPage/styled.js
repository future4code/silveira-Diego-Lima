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
    height: 131px;
    width: 364px;
    left: 30px;
    top: 124px;
    border-radius: 12px;
    background: #EDEDED;
`
export const CommentContainer = styled.div`
    height: 189.88616943359375px;
    width: 364px;
    left: 31px;
    top: 541px;
    border-radius: 12px;
    padding: 9px, 10px, 9px, 10px;
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