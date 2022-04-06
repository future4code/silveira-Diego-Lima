import React from "react";
import axios from "axios";



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
                    <button onClick={this.props.irParaUsuarios}>Ir para Usuários</button>
                </div>
                <div>
                    <input
                        placeholder="Nome"
                        value={this.state.inputName}
                        onChange={this.onChangeName} />

                    <input
                        placeholder="E-mail"
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail} />

                    <button onClick={this.criarUsuario} > Criar Usuario </button>
                </div>
            </div>   


    )};

};    