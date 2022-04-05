import Telausuarios from "./components/TelaUsuarios"
import React from "react";
import axios from "axios"


class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: ""
  };

  getUsuarios = () => {
    const headers = {
      headers: {
        Authorization: "diego-lima-silveira"
      }
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios.get(url, headers)

      .then((res) => {
        console.log(res.data)
        this.setState({})
      }).catch((error) => {
        console.log(error.response.data);
      });


  }

  componentDidMount() {
    this.getUsuarios()
  }


  criarUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    const headers = {
      headers: {
        Authorization: "diego-lima-silveira"
      }
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)

      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error.response.data);
      });

  }

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ inputEmail: event.target.value });
  }



  render() {
    const listaUsuarios =
      this.state.usuarios.map((usuario) => {
        return <li key={usuario.id}>
          {usuario.name}</li>;
      });

    return (
      <div>
        <div>
          <button>Trocar de Tela</button>
        </div>
        <div>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.state.onChangeName} />

          <input 
            placeholder="E-mail"
            value={this.state.inputEmail}
            onChange={this.state.onChangeEmail} />

          <button onClick={this.state.criarUsuario} > Criar Usuario </button>

        </div>
      </div>
    );
  }
}

export default App;