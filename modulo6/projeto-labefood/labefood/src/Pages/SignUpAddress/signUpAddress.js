import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import { ButtonStyled } from '../../Global/GlobalStyled'
import useForm from '../../Hoocks/useForm'
import { goToFeed } from '../../Routes/coordinator'
import { Main, TextFieldStyled } from './styled'

const SignUpAddress = () => {
  const [form, handleInputChange, clear] = useForm({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
  })

  const navigate = useNavigate()

  const onSubmitFormAddress = (event) => {
    event.preventDefault()
    addAddress()
  }

  const addAddress = async () => {
    const token = localStorage.getItem('token')
    await axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed(navigate)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }


  return (
    <Main>
      <p>Meu Endereço</p>
      <form onSubmit={onSubmitFormAddress}>
        <TextFieldStyled
          id="outlined-basic"
          label={"Logadouro"}
          name='street'
          type={'text'}
          variant="outlined"
          placeholder={'Rua / Av.'}
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
          placeholder={'Número'}
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
          placeholder={'Apto. / Bloco'}
          value={form.complement}
          onChange={handleInputChange}
        />
        <TextFieldStyled
          id="outlined-basic"
          label={"Bairro"}
          name='neighbourhood'
          type={'text'}
          variant="outlined"
          placeholder={'Bairro'}
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
          placeholder={'Cidade'}
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
          placeholder={'Estado'}
          value={form.state}
          onChange={handleInputChange}
          required
        />
        <ButtonStyled type='submit' > Salvar </ButtonStyled>

      </form>


    </Main>
  )
}

export default SignUpAddress