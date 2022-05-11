import React from "react";
import Header from "../../components/Header/Header";
import { TelaCadastro, } from "../../global/GlobalStyled";
import { MainContainer} from "./styled"
import SignUpForm from "./SignUpForm";
import useUnprotectdPage from "../../hooks/useUnprotectedPage";


const SignUpPage = () => {
    useUnprotectdPage()


    return (
        <MainContainer>
            <TelaCadastro>
                <Header />
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
                <SignUpForm />
            </TelaCadastro>
        </MainContainer>
    )

}

export default SignUpPage;