import React from "react";
import axios from "axios";

const headers = {
    headers: {
      Authorization: "diego-lima-silveira"
    }
  }

export default class TelaUsuarios extends React.Component {

    state = {
        usuarios: [],
    }
    
    
    componentDidMount() {
        this.getUsuarios()
      }  
    
      getUsuarios = () => {
    
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    
        axios.get(url, headers)
    
          .then((res) => {
            console.log(res.data)
            this.setState({ usuarios: res.data})
          }).catch((error) => {
            console.log(error.message);
          });
      }


  render (){

    const listaUsuarios = this.state.usuarios.map((usuario) => {
        return <li key={usuario.id}>
          {usuario.name}</li>;
      });



  return (
    <div>
      <div>
        {/* <button onClick={this.getUsuarios}> Trocar de Tela </button> */}
      </div>
      <div>
        <ul>
          {listaUsuarios}
        </ul>
      </div>
    </div>
  )
}
}
