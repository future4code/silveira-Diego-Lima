import Telausuarios from "./components/TelaUsuarios"
import TelaCadastro from "./components/TelaCadastro";
import React from "react";



class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  };



  trocarTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
      return <TelaCadastro irParaUsuarios={this.irParaUsuarios}/>
      case "usuarios":
      return <Telausuarios irParaCadastro={this.irParaCadastro}/>
      default :
      return <TelaCadastro/>   
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})

  }
  irParaUsuarios = () => {
    this.setState({telaAtual:"usuarios"})

  }

  
  render() {

    return (
      <div>
       {this.trocarTela()}
      </div>
    )
  };

}
export default App;