import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";


export const ApplicationFormPage = () => {
    const navigate = useNavigate()



    return (
        <div>
            
            <div>
                <button  > Enviar </button>
                <button onClick={ () => goBack(navigate)}> Voltar </button>

            </div>
        </div>

    )
}
    ;    