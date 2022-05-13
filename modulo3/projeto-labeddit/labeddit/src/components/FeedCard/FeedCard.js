import React from 'react';
import { FeedContainer } from "./styled"
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator"
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';


const FeedCard = (props) => {
  const navigate = useNavigate()
  

  const onClickCard = (id) => {
    goToPost(navigate, id)
  }

  // const handleVote = (direction, postId) => {
  //   const headers = {
  //     headers: { Authorization: localStorage.getItem('token') }
  //   }
  //   const body = {
  //     direction: direction
  //   }
  //   const url = `${BASE_URL}/posts/${postId}/votes`

  //   if (direction === 1) {
  //     axios.post(url, body, headers)
  //       .then((res) => {
  //         console.log(res)
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //   } else if (direction === -1) {
  //     axios.put(url, body, headers)
  //       .then((res) => {
  //         console.log(res)
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //   } else {
  //     axios.delete(url, headers)
  //       .then((res) => {
  //         console.log(res)
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  // const handleLike = (postId, userVote) => {
  //   if (userVote === 1) {
  //     handleVote(postId)
  //   } else {
  //     handleVote(postId, 1)
  //   }
  // }

  // const handleDesLike = (postId, userVote) => {
  //   if (userVote === -1) {
  //     handleVote(postId)
  //   } else {
  //     handleVote(postId, -1)
  //   }
  // }

  return (

    <FeedContainer onClick={props.onClick}>
      <p>Enviado por: {props.autor}</p>
      <p>{props.texto}</p>
      <div>
        votos {props.votoS}
        {/* <button onClick={() => handleLike(props.id, props.userVote)}>LIKE</button>
        <button onClick={() => handleDesLike(props.id, props.userVote)} >DESLIKE</button> */}
      </div>
      comentarios {props.comentarios}
      <button onClick={() => onClickCard(props.id)} >Detalhes</button>

    </FeedContainer>

  );
}
export default FeedCard;