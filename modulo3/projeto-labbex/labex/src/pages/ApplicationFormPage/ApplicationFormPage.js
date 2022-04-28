import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { DivButtons, ApplicationContainer, FormContainer, CardCadastroContainer, ButtonContainer, Titulo } from "./styled"
import TextField from '@material-ui/core/TextField';



export const ApplicationFormPage = () => {
    const navigate = useNavigate()



    return (
        <div>
            <ApplicationContainer>
                <FormContainer>

                    <Titulo><strong>Inscreva-se para uma viagem</strong></Titulo>    

                    <TextField id="outlined-basic" label="Escolha uma Viagem" variant="filled" size="small" margin="normal"

                    
                    />
                    <TextField id="outlined-basic" label="Nome" variant="filled" size="small" margin="normal"



                    />
                    <TextField id="outlined-basic" label="Idade" variant="filled" size="small" margin="normal"
                        type="number"



                    />

                    <TextField id="outlined-basic" label="Texto de Candidatura" variant="filled" size="small" margin="normal"



                    />
                    <TextField id="outlined-basic" label="Profissão" variant="filled" size="small" margin="normal"


                    />

                    <TextField id="outlined-basic" label="Escolha um País" variant="filled" size="small" margin="normal"


                    />

                </FormContainer>



                <DivButtons>
                    <button  > Enviar </button>
                    <button onClick={() => goBack(navigate)}> Voltar </button>

                </DivButtons>
            </ApplicationContainer>


        </div>

    )
}
    ;    