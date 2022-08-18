import React, { useState } from 'react'
import { Form, Main, PasswordContainer, TextFieldStyled, LogoContainer } from './styled'
import useForm from "../../Hoocks/useForm"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CircularProgress, FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../../Constants/urls'
import { goToSignUpAddress } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { ButtonStyled } from '../../Global/GlobalStyled'
import Header from '../../Components/Header/Header'
import Logo4Food from '../../Assests/logo-4food.svg'


const SignUp = () => {

  const [form, handleInputChange, clear] = useForm({
    "name": "",
    "email": "",
    "cpf": "",
    "password": ""
  })
  const [showPass, setShowPass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [checkErrPass, setCheckErrPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }
  const handleClickShowPassword = () => {
    setShowPass(!showPass)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (form.password !== confirmPassword) {
      setCheckErrPass(true)
    } else {
      setCheckErrPass(false)
      signUpNewUser()
    }
  }

  const signUpNewUser = async () => {
    setIsLoading(true)
    await axios.post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert(`boas vindas ${res.data.user.name}`)
        setIsLoading(false)
        goToSignUpAddress(navigate)
      })
      .catch((err) => {
        alert(err.response.data.message)
        clear()
        setIsLoading(false)
        setConfirmPassword('')
      })
  }

  return (
    <Main>
      <Header title={"Cadastrar"} back />
      <LogoContainer>
        <img src={Logo4Food} alt="logo 4food"></img>
      </LogoContainer>
      <Form onSubmit={onSubmitForm}>
        <TextFieldStyled
          id="outlined-basic"
          label={"Nome"}
          name='name'
          type={'text'}
          variant="outlined"
          placeholder={'Nome e sobrenome'}
          value={form.name}
          onChange={handleInputChange}
        />
        <TextFieldStyled
          id="outlined-basic"
          label={"Email"}
          name='email'
          type={'email'}
          variant="outlined"
          placeholder={'email@email.com'}
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <TextFieldStyled
          id="outlined-basic"
          label={"CPF"}
          name='cpf'
          type={'text'}
          variant="outlined"
          placeholder={'000.000.000-00'}
          value={cpfMask(form.cpf)}
          onChange={handleInputChange}
          required
        />
        <PasswordContainer>
          <FormControl sx={{width: "80vw" }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password" >
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name='password'
              label={"Senha"}
              type={showPass ? 'password' : 'text'}
              placeholder={'Mínimo 6 caracteres'}
              value={form.password}
              onChange={handleInputChange}
              inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres " }}
              
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
        </PasswordContainer>
        <PasswordContainer>
          <FormControl sx={{width: "80vw" }} variant="outlined">
            <TextFieldStyled
              error={checkErrPass}
              helperText={checkErrPass ? 'Deve ser a mesma que a anterior.' : ''}
              id="outlined-adornment-password"
              name='password'
              label="Confirmar"
              type={showPass ? 'password' : 'text'}
              placeholder={'Confime a senha anterior'}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres " }}
              required
            />
          </FormControl>
        </PasswordContainer>
        <ButtonStyled type='submit' >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Criar</>}
        </ButtonStyled>

      </Form>

    </Main>
  )
}

export default SignUp