import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToListTrips } from "../../routes/coordinator";
import {DivButtons} from "./styled"


export const HomePage = () => {
    const navigate = useNavigate()



    return (
        <div>
            HomePage

            <DivButtons>
                <button onClick={ () => goToListTrips(navigate)} > Ver Viagens </button>
                <button onClick={ () => goToLogin(navigate)}> Area de Admin </button>

            </DivButtons>
        </div>

    )
}
    ;    