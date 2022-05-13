import React from "react";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import { TelaFeed } from "../../global/GlobalStyled";
import useProtectdPage from "../../hooks/useProtectPage";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer, PostContainer, FeedContainer } from "./styled";
import FeedCard from "../../components/FeedCard/FeedCard"
import { goToPost } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import AddPost from "./AddPost";
import axios from 'axios';


const FeedPage = () => {
    useProtectdPage()
    const navigate = useNavigate()
    const [feedPost, getPost] = useRequestData([], `${BASE_URL}/posts`)


    const onClickCard = (id) => {
        goToPost(navigate, id)

    }

    const handleVote = (postId, direction) => {
        console.log(postId)
        const headers = {
            headers: { Authorization: localStorage.getItem('token') }
        }
        const body = {
            direction: direction
        }

        if (direction === 1) {
            axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err.response)
                })
        } else if (direction === -1) {
            axios.put(`${BASE_URL}/posts/${postId}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err.response)
                })
        } else {
            axios.delete(`${BASE_URL}/posts/${postId}/votes`, headers)
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err.response)
                })
        }
        console.log(body)
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


    const feedCards = feedPost.map((post) => {
        return (
            <FeedContainer
                key={post.id}
            // onClick={() => onClickCard(post.id)}
            >
                <p>Enviado por: {post.username} </p>
                <p>{post.title}</p>
                <p> Post: {post.body}</p>
                <p>Comentarios {post.commentCount}</p>

                <div>
                    <button onClick={() => handleLike(post.id, post.userVote)}>LIKE</button>
                    {post.voteSum}
                    <button onClick={() => handleDesLike(post.id, post.userVote)} >DESLIKE</button>
                </div>
            </FeedContainer>
        )
    })

    return (
        <MainContainer>
            <TelaFeed>
                <Header />
                <AddPost getPost={getPost} />
                {feedCards}
            </TelaFeed>
        </MainContainer>
    )

}

export default FeedPage;