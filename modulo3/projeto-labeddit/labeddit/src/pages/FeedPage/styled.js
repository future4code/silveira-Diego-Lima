import styled from "styled-components";



export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw; 
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
export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    `
export const FeedContainer = styled.div`
    width: 364px;
    border-radius: 12px;
    background: #EDEDED;
    margin: 10px;
    padding: 10px;
`