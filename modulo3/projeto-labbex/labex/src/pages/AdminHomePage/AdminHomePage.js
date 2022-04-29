import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goCreate } from "../../routes/coordinator";
import { TripsContainer, AdmContainer, DivButtons, Titulo, DeleteContainer, BotaoDelete  } from "./styled";

export const AdminHomePage = () => {
    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-lima-silveira/trips',
            {
                headers: {
                    "auth": token
                }
            }).then((res) => {
                setTrips(res.data.trips)
            }).catch((err) => {
                console.log(err.response)
            });
    }, [])

    const listTrips = trips.map((trip) => {
        return (
            
            <TripsContainer key={trip.id}>
             <p><strong>Nome:</strong> {trip.name}</p> <DeleteContainer>Delete</DeleteContainer>          
            </TripsContainer>         
            
           

        )
    })

    console.log(trips)
    return (
        <AdmContainer>
            <Titulo>Painel Administrativo</Titulo>
            <DivButtons>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button onClick={() => goCreate(navigate)}>Criar Viagem</button>
                <button>  Logout </button>
            </DivButtons>
            <div>
            {listTrips}
            </div>

        </AdmContainer>

    )
}
    ;    