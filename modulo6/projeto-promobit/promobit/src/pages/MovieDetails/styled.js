import styled from "styled-components"
import TimelapseIcon from '@mui/icons-material/Timelapse';
import { CardMedia } from "@mui/material";

export const App = styled.div`
width: 100%;
height: 100vh;
`
export const Card = styled.div`
background-color: #2D0C5E;
`
export const CardDetails = styled.div`
display: flex;
color: #FFFFFF;
background-color: #2D0C5E;
`
export const TagLogo = styled.img`
margin-left: 10%;
height: 24px;
padding: 15px;
cursor: pointer;
`
export const LogoContainer = styled.div`
width: 100%;
background-color: #2D0C5E;

`

export const CardImg = styled.img`
width: 175px;
height: 222px;
border-radius: 10px;    
`
export const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
border: solid black 1px;

border-radius: 12px;
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.25);  
`
export const Trailer = styled.iframe`
padding: 5px;
`

export const CastContainer = styled.div`
margin-right: 10%;
margin-left: 10%;
display: flex; 
flex-direction: row;
column-gap: 20px;
overflow-x: auto;    
`

export const Titulo = styled.h3`
margin-left: 10%;

`

export const CardRecommendations = styled.div`

margin-right: 10%;
margin-left: 10%;
display: flex; 
flex-direction: row;
column-gap: 20px;
overflow-x: auto;
`

export const Footer = styled.footer`
height: 200px;
`

export const PercentageVote = styled(TimelapseIcon)`
color: #14FF00;
background-color: #2D0C5E;
height: 50px;
padding: 10px;
`
export const CardImgPoster = styled.img`
width: fit-content;
border-radius:15px;
`            
export const PosterContainer = styled.div`
width: fit-content;
margin-left: 10%;
margin-right: 5%;
background-color: #2D0C5E;
`

export const VoteContainer = styled.div`
display: flex;
align-items: center;  
`
export const CardMediaEstilizado = styled(CardMedia)`
border-radius: 8px;
margin-right: 10%;
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;
background-color: #2D0C5E;
`
export const ContainerCrew = styled.div`
margin-top: 5%;
display: grid;
grid-template-columns: repeat(auto-fit, 15em);
grid-gap: 1em;
`
export const CardCrew = styled.div`
display: flex;
flex-direction: column;

`
export const Genres = styled.span`
padding: 5px;

`
export const ContainerInfo = styled.div`
display: flex;


`
export const Info = styled.span`
padding: 3px;

`
export const ContainerVideo = styled.div`
width: 90%;
margin-left: 10%;
`
export const Video = styled.iframe`
width: 80%;
`

