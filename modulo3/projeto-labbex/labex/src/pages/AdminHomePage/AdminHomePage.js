import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";

export const AdminHomePage = () => {
    const navigate = useNavigate()

    return(
        <div>
           AdminHomePage 

           <div>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button>  Inscrever-se </button>
            </div>

        </div>

    )
}
;    