import styled from "styled-components"
import TimelapseIcon from '@mui/icons-material/Timelapse';


export const CardDetails = styled.div`
    display: flex;
    color: #FFFFFF;
    background-color: #2D0C5E;
    font-family: Roboto;
    font-style: Bold;


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
    width: 175px;
    border-radius: 12px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.25);  

`

export const Trailer = styled.iframe`
    margin: 10px;
    padding: 5px;

`

export const CastContainer = styled.div`
    margin-right: 110px;
    margin-left: 110px;
    display: flex; 
    flex-direction: row;
    column-gap: 20px;
    overflow-x: auto;
    
    
`

export const Titulo = styled.h3`
    margin-left: 110px;

`

export const CardRecommendations = styled.div`
    margin-right: 110px;
    margin-left: 110px;
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

export const VoteContainer = styled.div`
    display: flex;
    align-items: center;
    


`