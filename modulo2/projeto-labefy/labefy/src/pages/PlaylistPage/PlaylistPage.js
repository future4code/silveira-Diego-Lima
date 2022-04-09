import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import { PlaylistCard } from './styled'
import { BotaoDelete } from './styled'


const headers = {
    headers: {
        Authorization: "diego-lima-silveira"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
export default class PlaylistPage extends React.Component {
    state = {
        lista: [],
        inputNome: ""
    }

    componentDidMount() {
        this.getPlaylists()

    }
    getPlaylists = () => {
        axios.get(url, headers)
            .then((res) =>
                this.setState({ lista: res.data.result.list }))
            .catch((err) =>
                console.log(err.response))
    }


    criarPlaylist = () => {

        const body = {
            name: this.state.inputNome
        }

        axios.post(url, body, headers)
            .then((res) =>
                console.log(res))
            .catch((err) =>
                console.log(err.response))
    }

    deletarPlaylist = (id) => {

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
            .then((res) => {
                alert("Playlist deletada com sucesso")
                this.getPlaylists()
            }).catch((err) =>
                console.log(err.response.data))


    }

    onChangeInputNome = (e) => {
        this.setState({ inputNome: e.target.value })

    }



    render() {

        const listPlaylist = this.state.lista.map((playlist) => {
            return (
                <PlaylistCard
                    key={playlist.id}
                    onClick={() => this.props.irParaDetalhePlaylist(playlist.id)}
                >
                    {playlist.name}
                    <BotaoDelete onClick={() => this.deletarPlaylist(playlist.id)}>X</BotaoDelete>
                </PlaylistCard>)

        })


        console.log(this.state.lista)
        return (

            <div>
                <div>
                    <input placeholder={"Nome da Playlist"}
                        value={this.state.inputNome}
                        onChange={this.onChangeInputNome}
                    />
                    <button onClick={this.criarPlaylist}>Criar Playlist</button>

                </div>
                <div>
                    {listPlaylist}
                </div>
            </div>

        )


    }

}