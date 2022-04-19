import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import { MusicCard } from './styled';
import { BotaoDelete } from './styled';
import { MainContainer } from './styled'
import { DivInput } from './styled'
import { Input } from './styled'
import { BotaoCriar } from './styled'
import { BotaoVoltar } from './styled'
import { Titulo } from './styled'
import { Texto } from './styled'
import { Musica } from './styled'

const headers = {
    headers: {
        Authorization: "diego-lima-silveira"
    }
}

export default class DetalhesPlaylist extends React.Component {
    
    state = {
        musicas: [],
        inputNome: "",
        inputArtistas: "",
        inputUrl: "",
    }


    componentDidMount() {
        this.pegarMusicasPlaylist()     
    }   

       

    pegarMusicasPlaylist = () => {

        axios.get(`${BASE_URL}/${this.props.id}/tracks`, headers)

            .then((res) => {
                this.setState({ musicas: res.data.result.tracks })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    getPlaylists = () => {
        axios.get(BASE_URL, headers)
            .then((res) =>
                this.setState({ lista: res.data.result.list }))
                console.log("peguei a lista")
            .catch((err) =>
                console.log(err.response))
    }

    adicionarMusica = () => {
        const body = {
            name: this.state.inputNome,
            artist: this.state.inputArtistas,
            url: this.state.inputUrl
        }
        axios.post(`${BASE_URL}/${this.props.id}/tracks`, body, headers)
            .then((res) => {
                alert("adicionada com sucesso")
                this.setState({ inputNome: "", inputArtistas: "", inputUrl: "", })
                this.pegarMusicasPlaylist()

            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deletarMusica = (id) => {
        axios.delete(`${BASE_URL}/${this.props.id}/tracks/${id}`, headers)
            .then((res) => {
                alert("Musica deletada com sucesso")
                this.pegarMusicasPlaylist()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    onChangeInputNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    onChangeInputArtistas = (e) => {
        this.setState({ inputArtistas: e.target.value })
    }

    onChangeInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    render() {
        
        console.log(this.props)
        const listaMusicas = this.state.musicas.map((musica) => {
            return (
                <MusicCard
                    key={musica.id}>
                    
                        <Texto> {musica.artist} - {musica.name}</Texto>
                    
                    <Musica src={musica.url} />
                    <BotaoDelete onClick={() => this.deletarMusica(musica.id)}>Deletar Musica</BotaoDelete>
                    
                </MusicCard>)


        })
        
        return (

            <MainContainer>

                <Titulo> </Titulo>
                <DivInput>

                    <Input
                        placeholder="Nome da Musica"
                        value={this.state.inputNome}
                        onChange={this.onChangeInputNome}
                    />
                    <Input
                        placeholder="Nome dos Artistas"
                        value={this.state.inputArtistas}
                        onChange={this.onChangeInputArtistas}
                    />
                    <Input
                        placeholder="Url da Musica"
                        value={this.state.inputUrl}
                        onChange={this.onChangeInputUrl}
                    />
                    <BotaoCriar
                        onClick={this.adicionarMusica}> Adicionar Musica</BotaoCriar>

                </DivInput>

                
                    {listaMusicas}
                    
                    <BotaoVoltar onClick={this.props.irParaPlaylistPage}>Voltar para Playlist</BotaoVoltar>
                


            </MainContainer>

        )


    }

}