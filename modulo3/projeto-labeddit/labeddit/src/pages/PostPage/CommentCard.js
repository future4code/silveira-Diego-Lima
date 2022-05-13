import React from 'react';
import { CommentContainer } from "./styled"
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';


const CommentCard = (props) => {
  
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
                    console.log(res)
                    
                }).catch((err) => {
                    console.log(err)
                })
        } else if (direction === -1) {
            axios.put(url, body, headers)
                .then((res) => {
                    console.log(res)
                    
                }).catch((err) => {
                    console.log(err)
                })
        } else {
            axios.delete(url, headers)
                .then((res) => {
                    console.log(res)
                    
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
            <p>Enviado por: {props.username}</p>
            <p>{props.body}</p>
            <div>
                <button onClick={() => handleLike(props.id, props.userVote)}>LIKE</button>
                votos {props.votos}
                <button onClick={() => handleDesLike(props.id, props.userVote)} >DESLIKE</button>
            </div>

        </CommentContainer>

    );
}
export default CommentCard;