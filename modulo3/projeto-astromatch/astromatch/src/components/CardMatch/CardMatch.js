import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url"
import { Container, DivImage } from "./styled"



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
            <div>
                <button onClick={props.goToListMatch}>Matches</button>
            </div>
            <DivImage src={profile.photo} alt={profile.name} />
            {profile.name} {profile.age}
            <p>{profile.bio}</p>
            <div>
                <button onClick={() =>choosePerson(true)} >Like</button>
                <button onClick={() =>choosePerson(false)}>Deslike</button>
            </div>
           
        </Container>

    )

}
export default CardMatch;