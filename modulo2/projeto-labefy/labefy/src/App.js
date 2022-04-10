import React from 'react';
import DetalhesPlaylist from './pages/DetalhesPlaylist/DetalhesPlaylist';
import ListaPlaylist from './pages/PlaylistPage/PlaylistPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

export default class App extends React.Component {
  state = {
    telaAtual: "lista",
    playlistClicada: ""
  }


  trocarTela = () => {
    switch (this.state.telaAtual) {
      case "lista":
        return <ListaPlaylist irParaDetalhePlaylist={this.irParaDetalhePlaylist} />
      case "detalhes":
        return <DetalhesPlaylist irParaPlaylistPage={this.irParaPlaylistPage} id={this.state.playlistClicada}/>
      default:
        return <ListaPlaylist irParaDetalhePlaylist={this.irParaDetalhePlaylist} />
    }
  }

  irParaDetalhePlaylist = (id) => {
      this.setState({telaAtual: "detalhes", playlistClicada:id})

  }

  irParaPlaylistPage = () => {
    this.setState({telaAtual: "lista", playlistClicada:""})

  }


  render() {
    return (
      <div>
        <GlobalStyle/>
        {this.trocarTela()}
      </div>
    );
  }
}



