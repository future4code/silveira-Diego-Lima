import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url"
import { Container, DivImage, HeaderContainer,Nome, ButtonsContainer, Imagem , ButtonLike, ButtonDeslike, ButtonMatches} from "./styled"
import Logo from '../../media/astromatch.png'
import FavoriteIcon from '@material-ui/icons/Favorite';



const CardMatch = (props) => {
    const [profile, SetProfile] = useState([])
    const [userChoice, SetUserChoice] = useState()

    useEffect(() => {
        getProfile()
        
    },[]) 
       

    const getProfile = async () => {
        try {
            const response = await axios.get(`${BASE_URL}diego-silveira/person`)
            SetProfile(response.data.profile)
            // console.log(response.data.profile)
        } catch (err) {
            console.log(err)
        }
    }

    const choosePerson = async (userChoice) => {
        try {
            const body = {
                "id": profile.id,
                "choice": userChoice
            }
           const response = await axios.post(`${BASE_URL}diego-silveira/choose-person`, body)
            console.log(response)
            getProfile()
        } catch (err) {
            console.log(err.response)
        }
    }
    
    useEffect(() => {
        getProfile()
        
    },[userChoice]) 

   console.log(profile)
    return (
        <Container>
            <HeaderContainer>
               <Imagem src={Logo} alt="astromatch"></Imagem>
               <ButtonMatches onClick={props.goToListMatch}>Matches</ButtonMatches>
            </HeaderContainer>
            
            <DivImage src={profile.photo} alt={profile.name} />
            <Nome>{profile.name}, {profile.age}</Nome>
            <Nome>{profile.bio}</Nome>
            <ButtonsContainer>
               <ButtonLike><FavoriteIcon onClick={() =>choosePerson(true)}></FavoriteIcon></ButtonLike>
                <ButtonDeslike onClick={() =>choosePerson(false)}> X </ButtonDeslike>
            </ButtonsContainer>
           
        </Container>

    )

}
export default CardMatch;