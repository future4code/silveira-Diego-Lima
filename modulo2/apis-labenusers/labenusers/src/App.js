import Telausuarios from "./components/TelaUsuarios"
import React from "react";
import axios from "axios"



const headers = {
  headers: {
    Authorization: "diego-lima-silveira"
  }
}
class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: ""
  };

  // componentDidMount() {
  //   this.getUsuarios()
  // }  

  // getUsuarios = () => {

  //   const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  //   axios.get(url, headers)

  //     .then((res) => {
  //       alert(res.data)
  //       this.setState({})
  //     }).catch((error) => {
  //       alert(error.message);
  //     });
  // }

  criarUsuario = () => {
      const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)

      .then((res) => {
        this.getUsuarios();
        this.setState({
          inputName: ""
        })
        alert(res.data)

      }).catch((error) => {
        console.log(error.response.data);
      });
  }

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  }

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
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
            onChange={this.onChangeName} />

          <input
            placeholder="E-mail"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail} />

          <button onClick={this.criarUsuario} > Criar Usuario </button>
        </div>
        <hr></hr>
        <Telausuarios></Telausuarios>
        <ul>
          {listaUsuarios}
        </ul>


      </div>
    );
  }
}

export default App;