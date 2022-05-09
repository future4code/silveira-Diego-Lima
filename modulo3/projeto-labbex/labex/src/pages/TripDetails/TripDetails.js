import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



export const TripDetails = () => {
    const navigate = useNavigate()

    return (
        <div>
            Detalhes da Viagem

            <div>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            </div>
        </div>

    )
}
;