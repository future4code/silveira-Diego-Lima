import React from "react";
import styled from "styled-components"
import createGlobalStyle from "styled-components"
// import styled, {createGlobalStyle} from "styled-component";

// const GlobalStyled = createGlobalStyle`
// *{  margin:0;
//     padding: 0;
//     box-sizing: border-box;
// }`
const Msg = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;

`
const CardMensagem = styled.div`
    max-width: 600px;
    height: 100vh;
    border: 1px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  
`



export default class App extends React.Component {
  state = { 
    whatslab:[
    { usuario: "", mensagem: ""}
  ],
  inputUsuario:"",
  inputMensagem: ""
};

onChangeUsuario = (event) => {
  this.setState({
    inputUsuario: event.target.value
  });
}
onChangeMensagem = (event) => {
    this.setState({
      inputMensagem: event.target.value
  });
}
adicionarMensagem = () => {
  const novasMensagens = [...this.state.whatslab];
  const novaMensagem = {
    usuario: this.state.inputUsuario,
    mensagem: this.state.inputMensagem};
  novasMensagens.push(novaMensagem);
    
    this.setState({
      whatslab:novasMensagens,
      inputUsuario: "",
      inputMensagem: ""
    });
  }
render() {
  const componentesMensagem = this.state.whatslab.map((whatslab) => {
    return (
        
        <Msg key={whatslab.usuario}>
        <p><strong>{whatslab.usuario}</strong></p><p>:{whatslab.mensagem}</p>
        </Msg>
        
    );
    });   
  return (
    <>
    <div>
    <CardMensagem>
    <Msg>  
    <input
      placeholder="Usuário"
      value={this.state.inputUsuario}
      onChange={this.onChangeUsuario}
    />
    <input
      placeholder="Mensagem"
      value={this.state.inputMensagem}
      onChange={this.onChangeMensagem}
      type="text"
    />
    <button onClick={this.adicionarMensagem}>Enviar</button>
    </Msg>
    {componentesMensagem}
    </CardMensagem>
    </div>
    </>
    );
  }
}    
