import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";


export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeed(navigate)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data)
        })
}

export const signUp = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeed(navigate)
        })
        .catch((err) =>
            alert(err.message)
        )
}

export const createPost = (body, clear, getPosts, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        alert(res.data)
        clear();
        setIsLoading(false)
        getPosts();


    }).catch((err) => {
        alert(err.data)
        setIsLoading(false)
        
    })
}

export const createComment = (body, clear, params, setIsLoading, getComments) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${params}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        alert(res.data)
        clear();
        getComments()
        setIsLoading(false)



    }).catch((err) => {
        alert(err.data)
        setIsLoading(false)
       
    })
}