import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar, LogoImage} from "./styled"
import Button from '@material-ui/core/Button';
import { goToLogin, goBack } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/labenu.png"




const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [botaoDireito, setBotaoDireito] = useState (token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const acaoBotaoDireito = () => {
    if (token){
      logout()
      setBotaoDireito("Login")
      goToLogin(navigate)
    }else {
      goToLogin(navigate)
    }
  }

  return (

    <AppBar position="static">
      <StyledToolbar>
      
        <LogoImage src={logo} onClick={() => goBack(navigate) }/> 
        <Button onClick={acaoBotaoDireito}>{botaoDireito}</Button>
      
      </StyledToolbar>
    </AppBar>

  );
}
export default Header;