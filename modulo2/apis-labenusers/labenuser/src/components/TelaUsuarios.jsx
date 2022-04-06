import React from "react";
import axios from "axios";
import styled from 'styled-components';


const headers = {
    headers: {
      Authorization: "diego-lima-silveira"
    }
  }

const  CardUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid black;
    width: 50%;

`


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

      deletarUsuario = (id) => {
        let url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url,headers)
        .then ((res) => {
          alert("Usuário(a) deletado com sucesso")
          this.getUsuarios()
        }).catch((error) => {
          console.log(error.response.data)
        })
          
      }


  render (){

    const listaUsuarios = this.state.usuarios.map((usuario) => {
        return <CardUsuario key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
          </CardUsuario>;
      });



  return (
    <div>
      <div>
        <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
      </div>
      <div>
        {listaUsuarios}
        
      </div>
    </div>
  )
}
}
