import React from "react";
import { TelaLogin,LinhaDiv, SignUpButton } from "../../global/GlobalStyled";
import { MainContainer, LogoImage, UpperContent} from "./styled"
import logo from "../../assets/labenu.png"
import { goToSignUp } from "../../routes/coordinator";
import {useNavigate} from 'react-router-dom'
import LoginForm from "./LoginForm";
import useUnprotectdPage from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
    useUnprotectdPage()
    const navigate = useNavigate()

    return (
        <MainContainer>
            <TelaLogin>
                <UpperContent>
                    <LogoImage src={logo} />
                    <h1>LabEddit</h1>
                    <p>O projeto de rede social da Labenu</p>
                </UpperContent>
                <LoginForm/>
                <LinhaDiv />
                <div>

                    <SignUpButton onClick= {() => goToSignUp(navigate)} variant= "text" color="primary" margin="normal" fullWidth >
                        Crie uma Conta
                    </SignUpButton>
                </div>

            </TelaLogin>
        </MainContainer>
    )

}

export default LoginPage;