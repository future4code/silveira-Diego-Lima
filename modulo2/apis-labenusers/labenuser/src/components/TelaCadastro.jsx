import React from "react";
import axios from "axios";
import styled from 'styled-components';


const BotaoTrocarTela = styled.button`
    &:hover{ background: #726b6b}
    border-radius: 5px;
    border: 1px solid black;
    height: 20px;
    
`
const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 120px;
    justify-content: center;
    border-radius: 10px;
    box-shadow: #777777 3px 3px 4px 2px;
    
    
`
const MainContainer =styled.div`
    display: flex;
    justify-content: center;

`
const BotaoCriar = styled.button`
    &:hover{ background: #726b6b}
    border-radius: 5px;
    border: 1px solid black;
    height: 20px;
    margin: 5px;
    
`
const Input = styled.input`
    margin: 5px;

`




const headers = {
    headers: {
        Authorization: "diego-lima-silveira"
    }
}

export default class TelaCadastro extends React.Component {

    state = {
        inputName: "",
        inputEmail: ""
    }


    criarUsuario = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)

            .then((res) => {
                this.setState({
                    inputName: "",
                    inputEmail: ""
                })
                alert("Usuário(a) cadastrado(a) com sucesso")

            }).catch((error) => {
                alert("Existe um usuário(a) com este nome ou email")
            });
    }

    onChangeName = (e) => {
        this.setState({ inputName: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
    }



    render() {

        return (
            <div>
                <div>
                    <BotaoTrocarTela onClick={this.props.irParaUsuarios}>Ir para Usuários</BotaoTrocarTela>
                </div>
                <MainContainer>
                    <DivInput>
                        <Input
                            placeholder="Nome"
                            value={this.state.inputName}
                            onChange={this.onChangeName} />

                        <Input
                            placeholder="E-mail"
                            value={this.state.inputEmail}
                            onChange={this.onChangeEmail} />

                        <BotaoCriar onClick={this.criarUsuario} > Criar Usuario </BotaoCriar>

                    </DivInput>
                </MainContainer>

            </div>


        )
    };

};    