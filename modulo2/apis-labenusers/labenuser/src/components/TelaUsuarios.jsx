import React from "react";
import axios from "axios";
import styled from 'styled-components';


const headers = {
    headers: {
      Authorization: "diego-lima-silveira"
    }
  }

  const BotaoTrocarTela = styled.button`
  &:hover{ background: #726b6b}
  border-radius: 5px;
  border: 1px solid black;
  height: 20px; 
  
`

const CardUsuario =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    box-shadow: #343030 3px 3px 4px 2px;
    margin-bottom: 10px;
    padding: 0px 10px;
    cursor: pointer;
  `

const BotaoDelete =styled.button`
 &:hover{ background: red}
 &:hover{color: white};
  color  : red ;
  border-radius: 5px;
  border: 1px solid black;
  height: 20px;

`



const  MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
    padding: 10px;

    border: 1px solid black;
    width: 350px;


    
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
          <BotaoDelete onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDelete>
          </CardUsuario>;
      });



  return (
    <div>
      <div>
        <BotaoTrocarTela onClick={this.props.irParaCadastro}>Ir Para Cadastro</BotaoTrocarTela>
      </div>
      <hr/>
      <MainContainer>
        {listaUsuarios}
        
      </MainContainer>
    </div>
  )
}
}
