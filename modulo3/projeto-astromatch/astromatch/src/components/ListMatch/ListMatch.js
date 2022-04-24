import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, DivImage, ButtonContainer, Matches, Texto, Titulo, ButtonVoltar, ButtonResetar } from "./styled"


const ListMatch = (props) => {
    const [matches, SetMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-silveira/matches`)
            SetMatches(response.data.matches)
        } catch (err) {
            console.log(err.response)
        }
    }

    const clearMatches = async () => {
        try {
            const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-silveira/clear")
            console.log(response)
            getMatches()
        } catch (err) {
            console.log(err.response)
        }

    }
    return (

        <Container>
            <ButtonVoltar onClick={props.goToCardMatch}>Voltar</ButtonVoltar>
            <Titulo>Lista de Matches</Titulo>
            {matches.map(matches => {
                return (
                    <Matches key={matches.id}>
                        <DivImage src={matches.photo} alt={matches.name} />
                        <Texto>{matches.name}, {matches.age}</Texto>
                    </Matches>
                )
            })}
            <ButtonContainer>
                <ButtonResetar onClick={clearMatches}>Resetar</ButtonResetar>
            </ButtonContainer>


        </Container>
    )
}

export default ListMatch;