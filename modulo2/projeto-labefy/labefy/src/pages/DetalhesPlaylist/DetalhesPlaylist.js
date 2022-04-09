import React from "react";
import axios from "axios";
import {MusicCard} from './styled';
import {BotaoDelete} from './styled';

const headers = {
    headers: {
        Authorization: "diego-lima-silveira"
    }
}

export default class DetalhesPlaylist extends React.Component {

    state = {

        musicas: []
    }

    componentDidMount() {
        this.pegarMusicasPlaylist()
    }

    pegarMusicasPlaylist = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, headers)

            .then((res) => {
                this.setState({ musicas: res.data.result.tracks })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }




    render() {
        const listaMusicas = this.state.musicas.map((musica) => {
            return (
                <MusicCard key={musica.id}>
                    <p>{musica.artist}</p>
                    <p>{musica.name}</p>
                    {musica.url}

                </MusicCard>)


        })
        console.log(this.state.musicas)
        return (

            <div> {listaMusicas}</div>

        )


    }

}