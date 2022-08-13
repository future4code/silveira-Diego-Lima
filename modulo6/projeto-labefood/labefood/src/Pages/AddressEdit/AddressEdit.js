import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/urls'
import { ButtonStyled } from '../../Global/GlobalStyled'
import useForm from '../../Hoocks/useForm'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import { goToProfile } from '../../Routes/coordinator'
import { Main, TextFieldStyled } from './styled'

const AddressEdit = () => {
    useProtectedPage()
    const [form, handleInputChange, clear, setForm] = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const getAddress = async () => {
        await axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data.address)
                setForm({
                    "street": res.data.address.street,
                    "number": res.data.address.number,
                    "neighbourhood": res.data.address.neighbourhood,
                    "city": res.data.address.city,
                    "state": res.data.address.state,
                    "complement": res.data.address.complement
                })

            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const navigate = useNavigate()

    const updateAddress = async () => {
        const token = localStorage.getItem('token')
        await axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToProfile(navigate)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    const onSubmitFormAddress = (event) => {
        event.preventDefault()
        updateAddress()
    }


    useEffect(() => {
        getAddress()

    }, [])

    return (
        <Main>
            <Header title={"Editar Endereço"} back />

            <form onSubmit={onSubmitFormAddress}>
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Logadouro"}
                    name='street'
                    type={'text'}
                    variant="outlined"
                    value={form.street}
                    onChange={handleInputChange}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Número"}
                    name='number'
                    type={'number'}
                    variant="outlined"
                    value={form.number}
                    onChange={handleInputChange}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Complemento"}
                    name='complement'
                    type={'text'}
                    variant="outlined"
                    value={form.complement}
                    onChange={handleInputChange}
                />
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Bairro"}
                    name='neighbourhood'
                    type={'text'}
                    variant="outlined"
                    value={form.neighbourhood}
                    onChange={handleInputChange}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Cidade"}
                    name='city'
                    type={'text'}
                    variant="outlined"
                    value={form.city}
                    onChange={handleInputChange}
                    required
                />
                <TextFieldStyled
                    id="outlined-basic"
                    label={"Estado"}
                    name='state'
                    type={'text'}
                    variant="outlined"
                    value={form.state}
                    onChange={handleInputChange}
                    required
                />
                <ButtonStyled type='submit' > Salvar </ButtonStyled>

            </form>


        </Main>
    )
}

export default AddressEdit