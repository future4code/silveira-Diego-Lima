import styled from "styled-components";
import ReactPaginate from "react-paginate";



export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Autor = styled.p`
    color: #6F6F6F;
    size: 12px;
`
export const PostContent= styled.p`
    size: 20px;
`
export const ReactPaginateContainer = styled(ReactPaginate)`
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #ffcc00;
    color: black;
;
    cursor: pointer;

    :hover {
      color: #ffcc00;
      background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%),linear-gradient(0deg, #4088CB, #4088CB);

    }  
  }

  .paginationActive a {
    color: black;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%),linear-gradient(0deg, #4088CB, #4088CB);

  }  
`
export const ContainerOnTop = styled.div`
    width: 364px;
    border-radius: 12px;
    background: #EDEDED;
    margin: 10px;
    padding: 10px;
`