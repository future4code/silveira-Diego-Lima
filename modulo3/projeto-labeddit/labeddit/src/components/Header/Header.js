import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar, LogoImage} from "./styled"
import Button from '@material-ui/core/Button';
import { goToLogin } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/labenu.png"




const Header = () => {

  const navigate = useNavigate()

  return (

    <AppBar position="static">
      <StyledToolbar>
      
        <LogoImage src={logo}/> 
        <Button onClick={() => goToLogin(navigate)}>Login</Button>
      
      </StyledToolbar>
    </AppBar>

  );
}
export default Header;