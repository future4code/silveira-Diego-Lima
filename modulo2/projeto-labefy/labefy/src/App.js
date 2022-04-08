import React from 'react';
import DetalhesPlaylist from './pages/DetalhesPlaylist/DetalhesPlaylist';
import ListaPlaylist from './pages/ListaPlaylist/ListaPlaylist';

export default class App extends React.Component {
  state = {
    telaAtual: "lista"
  }


  trocarTela = () => {
    switch (this.state.telaAtual) {
      case "lista":
        return <ListaPlaylist />
      case "detalhes":
        return <DetalhesPlaylist />
      default:
        return <ListaPlaylist />
    }
  }










  render() {
    return (
      <div>
        {this.trocarTela()}
      </div>
    );
  }
}



