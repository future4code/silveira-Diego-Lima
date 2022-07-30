import styled from "styled-components"
import ReactPaginate from "react-paginate";

export const Header = styled.header`
background-color: #2D0C5E;
color: #FFFFFF;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin: 0;
height: 449px;
`

export const Titulo = styled.h2`
    display: flex;
    justify-content: center;
`


export const ContainerCardMovies = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fit, 20em);
  justify-content: center;
  grid-gap: 1em;
  width: 60 auto;
  min-height: 90px;
  background-color: #E5E5E5;
`
export const FakeDiv = styled.div`
  margin: 0;
  padding: 0;
`


export const ReactPaginateContainer = styled(ReactPaginate)`
  margin: 100px;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #5C16C5;
    color: black;
;
    cursor: pointer;

    :hover {
      color: #FFFFFF;
      background: #5C16C5;

    }  
  }

  .paginationActive a {
    color: black;
    background: #5C16C5;

  }  
`