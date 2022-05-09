import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplication } from "../../routes/coordinator";
import { DivButtons, Titulo, MainContainer, TripContainer } from "./styled"
import axios from "axios";
import useForm from "../../hooks/useForm";


export const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-lima-silveira/trips')

            .then((res) => {
                setTrips(res.data.trips)
            }).catch((err) => {
                console.log(err.response)
            });
    }, [])

    const listTrips = trips.map((trip) => {
        return (
            <TripContainer key={trip.id}>
             <p><strong>Nome:</strong> {trip.name} </p>
             <p><strong>Descrição:</strong> {trip.description}</p>
             <p><strong>Planeta:</strong> {trip.planet}</p>
             <p><strong>Duração:</strong> {trip.durationInDays}</p>
             <p><strong>Data:</strong> {trip.date}</p>
            </TripContainer>

        )
    })

    console.log(trips)
    return (
        <MainContainer>
            <DivButtons>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button onClick={() => goToApplication(navigate)}> Inscrever-se </button>
            </DivButtons>
            <Titulo>Lista de Viagens</Titulo>
            <div>
                {listTrips}
            </div>



        </MainContainer>

    )
}
    ;