import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            LoginPage

            <div>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            </div>
        </div>

    )
}
    ;