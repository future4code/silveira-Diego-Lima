import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack,goToApplication  } from "../../routes/coordinator";
import {DivButtons,Titulo} from "./styled"


export const ListTripsPage = () => {
    const navigate = useNavigate()

 
    return (
        <div>
            <DivButtons>
                <button onClick={() => goBack(navigate)}> Voltar </button>
                <button onClick={() => goToApplication(navigate)}> Inscrever-se </button>
            </DivButtons>
            <Titulo>Lista de Viagens</Titulo>
             <div>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Nunc finibus ipsum ut ex luctus eleifend. Nulla libero nibh, 
             convallis in fermentum a, porttitor non ligula. Suspendisse eget dolor risus. 
             Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
             Donec vehicula turpis mi, a pretium dui posuere eu. Fusce vestibulum pretium massa id ultricies.
             Nulla leo odio, laoreet faucibus nulla id, venenatis feugiat tortor. Pellentesque libero turpis, 
             faucibus rhoncus malesuada et, sollicitudin sit amet nisi.
                
            </div>   



        </div>

    )
}
    ;