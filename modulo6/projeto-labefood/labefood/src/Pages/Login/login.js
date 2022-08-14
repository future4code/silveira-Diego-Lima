import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, CircularProgress, FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ContainerImg, Form, LogoContainer, Main, PasswordContainer, TextFieldStyled, Title } from './styled'
import { BASE_URL } from '../../Constants/urls'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp, goToSignUpAddress } from '../../Routes/coordinator'
import { ButtonStyled } from '../../Global/GlobalStyled'
import Logo4Food from '../../Assests/logo-4food.svg'
import InitialScreen from '../../Assests/Tela-Inicial.png'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errEmail, setErrEmail] = useState("")
  const [errPass, setErrPass] = useState("")
  const [checkErrEmail, setCheckErrEmail] = useState(false)
  const [checkErrPass, setCheckErrPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const navigate = useNavigate()
  const onSubmitLogin = (event) => {
    event.preventDefault()
    const userLogin = {
      email,
      password
    }
    logar(userLogin)
  }
  const logar = async (body) => {
    setIsLoading(true)
    await axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail('')
        setPassword('')
        setErrEmail('')
        setErrPass('')
        setCheckErrEmail(false)
        setCheckErrPass(false)
        localStorage.setItem('token', res.data.token)
        alert(`boas vindas ${res.data.user.name}`)
        if (res.data.user.hasAddress === false) {
          goToSignUpAddress(navigate)
          setIsLoading(false)
        } else {
          goToFeed(navigate)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        if (err.response.data.message.includes('Senha incorreta')) {
          setErrPass(err.response.data.message)
          setCheckErrPass(true)
          setIsLoading(false)
        } else {
          setErrEmail(err.response.data.message)
          setCheckErrEmail(true)
          setIsLoading(false)
        }
      })
  }
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  }, [])

  return (
    <Main>
      {showSplash && <ContainerImg src={InitialScreen} />}
      <LogoContainer>
        <img src={Logo4Food} alt='logo 4food'></img>
      </LogoContainer>
      <Title>Entrar</Title>
      <Form onSubmit={onSubmitLogin}>
        <TextFieldStyled
          error={checkErrEmail}
          helperText={checkErrEmail ? errEmail : ''}
          id="outlined-basic"
          label="Email"
          type={'email'}
          variant="outlined"
          placeholder={'email@email.com'}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <PasswordContainer>
           <TextFieldStyled
            error={checkErrPass}
            helperText={checkErrPass ? errPass : ''}
            id="outlined-basic"
            label="Senha"
            type={showPassword ? 'password' : 'text'}
            variant="outlined"
            placeholder={'Mínimo 6 caracteres'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres " }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordContainer>
        <ButtonStyled type='submit' >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
        </ButtonStyled>

        <Button onClick={() => goToSignUp(navigate)}>Não possui cadastro? Clique aqui.</Button>
      </Form>
    </Main>
  )
}

export default Login