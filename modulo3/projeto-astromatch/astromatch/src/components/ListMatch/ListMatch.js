import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, DivImage } from "./styled"


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
            <button onClick={props.goToCardMatch}>Voltar</button>
            Lista de Macthes
            {matches.map(matches => {
                return (
                    <div key={matches.id}>
                        <DivImage src={matches.photo} alt={matches.name} />
                        <p>{matches.name} {matches.age}</p>
                    </div>
                )
            })}
            <div>
                <button onClick={clearMatches}>Resetar</button>
            </div>


        </Container>
    )
}

export default ListMatch;