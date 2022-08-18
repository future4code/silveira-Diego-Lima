import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Main, TextFieldStyled } from './styled'
import { ButtonStyled } from '../../Global/GlobalStyled'
import Header from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'
import { goToProfile } from '../../Routes/coordinator'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import { CircularProgress } from '@mui/material'


const ProfileEdit = () => {
    useProtectedPage()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const headers = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    }
    const navigate = useNavigate()
    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                setName(res.data.user.name)
                setEmail(res.data.user.email)
                setCpf(res.data.user.cpf)

            }).catch((error) => console.log(error));
    }

    const updateProfile = () => {
        setIsLoading(true)
        const body = {
            name,
            email,
            cpf
        }
        axios.put(`${BASE_URL}/profile`, body, headers)
            .then((res) => {
                setIsLoading(false)
                goToProfile(navigate)


            }).catch((err) => {
                setIsLoading(false)
                console.log(err);
            })
    }


    const cpfMask = (value) => {
        if (cpf && cpf) {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1");
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        updateProfile()
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <Main>
            <Header title={"Editar"} back />
            <Form onSubmit={onSubmitForm}>
                <TextFieldStyled
                    id="outlined-basic"
                    name='name'
                    type={'text'}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextFieldStyled
                    id="outlined-basic"
                    name='email'
                    type={'email'}
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    name='cpf'
                    type={'text'}
                    variant="outlined"
                    value={cpfMask(cpf)}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <ButtonStyled type='submit' >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
                </ButtonStyled>
            </Form>

        </Main>
    )
}

export default ProfileEdit