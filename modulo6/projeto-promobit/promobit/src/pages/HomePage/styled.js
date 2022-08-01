import styled from "styled-components"

export const Header = styled.header`
background-color: #38abed;
color: yellow;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin: 0 auto;
height: 125px;
`

export const ContainerCardMovies = styled.div`
display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    justify-content: center;
    grid-gap: 1em;
    width: 0 auto;
   min-height: 900px;
   background-color: yellow;
`