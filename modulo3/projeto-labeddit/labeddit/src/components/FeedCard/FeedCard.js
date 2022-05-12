import React from 'react';
import {FeedContainer} from "./styled"
import { useNavigate } from "react-router-dom";


const FeedCard = (props) => {
  const navigate = useNavigate()
  
  return (

    <FeedContainer onClick={props.onClick}>
        <p>Enviado por: {props.autor}</p>
        <p>{props.texto}</p>
        <div>
         votos {props.votoS} comentarios {props.comentarios}  
        </div>
      
    </FeedContainer>

  );
}
export default FeedCard;