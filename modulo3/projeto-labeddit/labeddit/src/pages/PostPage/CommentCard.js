import React from 'react';
import { CommentContainer, ButtonsContainer, Autor, PostContent } from "./styled"
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const CommentCard = (props) => {
    const getComments = props.getComments
  
    const handleVote = (postId, direction) => {
        const headers = {
            headers: { Authorization: localStorage.getItem('token') }
        }
        const body = {
            direction: direction
        }
        const url = `${BASE_URL}/comments/${postId}/votes`

        if (direction === 1) {
            axios.post(url, body, headers)
                .then((res) => {                   
                    getComments()
                    
                }).catch((err) => {
                    console.log(err)
                })
        } else if (direction === -1) {
            axios.put(url, body, headers)
                .then((res) => {                   
                    getComments()
                    
                }).catch((err) => {
                    console.log(err)
                  
                })
        } else {
            axios.delete(url, headers)
                .then((res) => {                    
                    getComments()
                    
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

        <CommentContainer>
            <Autor>Enviado por: {props.username}</Autor>
            <PostContent>{props.body}</PostContent>
            <ButtonsContainer>
                <ThumbUpAltOutlinedIcon color="primary" cursor="pointer" onClick={() => handleLike(props.id, props.userVote)}>LIKE</ThumbUpAltOutlinedIcon>
                 {props.votos}
                <ThumbDownIcon color="primary" cursor="pointer" onClick={() => handleDesLike(props.id, props.userVote)} >DESLIKE</ThumbDownIcon>
            </ButtonsContainer>

        </CommentContainer>

    );
}
export default CommentCard;