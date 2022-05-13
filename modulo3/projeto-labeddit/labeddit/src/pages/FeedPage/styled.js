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
    height: 131px;
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
height: 167px;
width: 364px;
left: 0px;
top: 0px;
border-radius: 12px;
padding: 9px, 10px, 9px, 10px;
background: #EDEDED;
margin: 10px;
padding: 5px;
`