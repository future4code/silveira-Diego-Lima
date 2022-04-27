import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



export const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            Criar Pagina

            <div>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            </div>
        </div>

    )
}
    ;