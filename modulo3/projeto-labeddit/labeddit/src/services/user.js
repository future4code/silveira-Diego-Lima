import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";


export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
        })
        .catch((err) => alert(err.response.data))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
        })
        .catch((err) => alert(err.response.data))
}

export const createPost = (body, clear, getPosts) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {
        alert(res.data)
        clear();
        getPosts();

    }).catch((err) => { 
          alert(err.data) 
          console.log(err)
    })
}

export const createComment = (body, clear, params, getComments) => {
    axios.post(`${BASE_URL}/posts/${params}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }).then((res) => {            
        alert(res.data)
        clear();
        getComments()     
               
        
    }).catch((err) => {
        alert(err.data)
        console.log(err)
    })
}