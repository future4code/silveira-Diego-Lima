import styled from "styled-components"

export const Header = styled.header`
background-color: #2D0C5E;
color: #FFFFFF;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin: 0;
height: 125px;
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