import React from 'react';
import { FeedContainer, ButtonsContainer, Autor, PostContent } from "./styled"
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator"
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';

const FeedCard = (props) => {
  const getPost = props.getPost

  const navigate = useNavigate()


  const onClickCard = (id) => {
    goToPost(navigate, id)
  }

  const handleVote = (postId, direction) => {
    const headers = {
      headers: { Authorization: localStorage.getItem('token') }
    }
    const body = {
      direction: direction
    }
    const url = `${BASE_URL}/posts/${postId}/votes`

    if (direction === 1) {
      axios.post(url, body, headers)
        .then((res) => {
          console.log(res)
          getPost()
        }).catch((err) => {
          console.log(err)
        })
    } else if (direction === -1) {
      axios.put(url, body, headers)
        .then((res) => {
          console.log(res)
          getPost()
        }).catch((err) => {
          console.log(err)
        })
    } else {
      axios.delete(url, headers)
        .then((res) => {
          console.log(res)
          getPost()
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  const handleLike = (postId, userVote) => {
    if (userVote === 1) {
      handleVote(postId)
    } else {
      handleVote(postId, 1)
    }
  }

  const handleDesLike = (postId, userVote) => {
    if (userVote === -1) {
      handleVote(postId)
    } else {
      handleVote(postId, -1)
    }
  }

  return (

    <FeedContainer>
      <Autor>Enviado por: {props.username}</Autor>
      <p>{props.titulo}</p>
      <PostContent>{props.post}</PostContent>
      <ButtonsContainer>
        <ThumbUpAltOutlinedIcon color="primary" cursor="pointer" onClick={() => handleLike(props.id, props.userVote)}></ThumbUpAltOutlinedIcon>
         {props.votos}
        <ThumbDownIcon color="primary" cursor="pointer" onClick={() => handleDesLike(props.id, props.userVote)} ></ThumbDownIcon>
        <InsertCommentOutlinedIcon color="primary" cursor="pointer" onClick={() => onClickCard(props.id)}></InsertCommentOutlinedIcon>{props.comentario}
      </ButtonsContainer>
      
    </FeedContainer>

  );
}
export default FeedCard;