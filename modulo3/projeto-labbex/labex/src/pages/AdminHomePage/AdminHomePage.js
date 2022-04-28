import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goCreate } from "../../routes/coordinator";
import { TripsContainer, AdmContainer, DivButtons, Titulo } from "./styled";

export const AdminHomePage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego/trips',
            {
                headers: {
                    auth: token
                }
            }).then((res) => {
                console.log('Deu certo', res.data)
            }).catch((err) => {
                console.log(err.response)
            });



    }, [])




    return (
        <AdmContainer>
            <Titulo>Painel Administrativo</Titulo>
            <DivButtons>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button onClick={() => goCreate(navigate)}>Criar Viagem</button>
                <button>  Inscrever-se </button>
            </DivButtons>

        </AdmContainer>

    )
}
    ;    