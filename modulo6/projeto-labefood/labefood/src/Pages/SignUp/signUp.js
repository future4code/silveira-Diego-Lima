import React, { useState } from 'react'
import { ButtonStyled, Form, Main, PasswordContainer, TextFieldStyled } from './styled'
import useForm from "../../Hoocks/useForm"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton } from '@mui/material'



const SignUp = () => {

  const [form, handleInputChange, clear] = useForm({
    "name": "",
    "email": "",
    "cpf": "",
    "password": ""
  })
  const [showPass, setShowPass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCheckPass, setShowCheckPass] = useState(false)
  const [checkErrPass, setCheckErrPass] = useState(false)

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
  // const handleClickShowCheckPassword = () => {
  //   setShowCheckPass(!showCheckPass)
  // }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (form.password !== confirmPassword) {
      setCheckErrPass(true)
    } else {
      setCheckErrPass(false)
    }
    console.log(form)
  }


  return (
    <Main>
      <p>Cadastrar</p>
      <Form onSubmit={onSubmitForm}>
        <TextFieldStyled
          id="outlined-basic"
          label={"Nome"}
          name='name'
          type={'text'}
          variant="outlined"
          placeholder={'Digite seu nome'}
          value={form.name}
          onChange={handleInputChange}
        />
        <TextFieldStyled
          id="outlined-basic"
          label={"Email"}
          name='email'
          type={'email'}
          variant="outlined"
          placeholder={'Digite seu email'}
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <TextFieldStyled
          id="outlined-basic"
          label={"Cpf"}
          name='cpf'
          type={'text'}
          variant="outlined"
          placeholder={'Digite seu cpf'}
          value={cpfMask(form.cpf)}
          onChange={handleInputChange}
          required
        />
        <PasswordContainer>
          <TextFieldStyled
            id="outlined-adornment-password"
            label={"Password"}
            name='password'
            type={showPass ? 'password' : 'text'}
            variant="outlined"
            placeholder={'Mínimo 6 caracteres'}
            value={form.password}
            onChange={handleInputChange}
            inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres " }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordContainer>
        <PasswordContainer>
          <TextFieldStyled
            error={checkErrPass}
            helperText={checkErrPass ? 'Deve ser a mesma que a anterior.' : ''}
            id="outlined-basic"
            label="Confirmar"
            type={showPass ? 'password' : 'text'}
            variant="outlined"
            placeholder={'Mínimo 6 caracteres'}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres " }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPass ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordContainer>
        <ButtonStyled type='submit' > Cadastrar </ButtonStyled>

      </Form>

    </Main>
  )
}

export default SignUp