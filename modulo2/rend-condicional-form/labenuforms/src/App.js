import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa3 from './components/Etapa3';
import Etapa2 from './components/Etapa2';
import Final from './components/Final';
import styled, { createGlobalStyle } from 'styled-components';


const GloboalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

}`

const Botao = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding-top: 10px;
`
class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }

  }

  proximaPagina = () => {
    this.setState({ etapa: this.state.etapa + 1 });

  }

  render() {
    return (
      <div>
        <GloboalStyled />
        {this.renderizarEtapa()}
        <br />
        <Botao>
        {this.state.etapa!== 4 ? (<button onClick={this.proximaPagina} >Proxima etapa</button>) :''}
        </Botao>
      </div>
    );
  }
}

export default App;