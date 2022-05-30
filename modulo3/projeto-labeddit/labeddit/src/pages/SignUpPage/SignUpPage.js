import React from "react";
import Header from "../../components/Header/Header";
import { TelaCadastro, } from "../../global/GlobalStyled";
import { MainContainer, Titulo} from "./styled"
import SignUpForm from "./SignUpForm";
import useUnprotectdPage from "../../hooks/useUnprotectedPage";


const SignUpPage = () => {
    useUnprotectdPage()


    return (
        <MainContainer>
            <TelaCadastro>
                <Header />
                <Titulo>Bem Vindo ao LabEddit</Titulo>
                <SignUpForm />
            </TelaCadastro>
        </MainContainer>
    )

}

export default SignUpPage;