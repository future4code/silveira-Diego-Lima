import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack,goToApplication  } from "../../routes/coordinator";


export const ListTripsPage = () => {
    const navigate = useNavigate()

 
    return (
        <div>
            Lista de Viagens


            <div>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button onClick={() => goToApplication(navigate)}> Inscrever-se </button>
            </div>
        </div>

    )
}
    ;