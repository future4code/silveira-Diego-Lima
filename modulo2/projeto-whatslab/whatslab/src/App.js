import React from "react";
import styled, {createGlobalStyle} from "styled-component";

const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}`


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
      <CardMensagem key={whatslab.usuario}>
        <p>{whatslab.usuario}</p>:<p>{whatslab.mensagem}</p>
      </CardMensagem>
    );
    });   
  return (
    <>
    <GlobalStyled/>
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
    <button onClick={this.adicionarMensagem}>Adicionar</button>
    {componentesMensagem}
    </>
    );
  }
}    
