import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'

const headers = {
        headers: {
        Authorization: "diego-lima-silveira"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
export default class ListaPlaylist extends React.Component {
    state = {
        lista: [],
        inputNome:""
    }

    componentDidMount() {
        
    }
    getPlaylists = () => {
        axios.get(url, headers)
            .then((res) =>
                console.log(res.list))
            .catch((err) =>
                console.log(err.response))
    }


    criarPlaylist = () =>{

        const body = {
            name: this.state.inputNome
        }
       
        axios.post(url, body, headers)
            .then((res) =>
                console.log(res))
            .catch((err) =>
                console.log(err.response))
    }


    onChangeInputNome = (e) => {
        this.setState({inputNome: e.target.value})

    } 

    

    render() {

        // const listPlaylist = this.state.lista.map((playlist) => {
        //     return 
        //         <div key={playlist.id}>
        //             {playlist.nome}
        //             <button onClick={() => this.deletarUsuario(playlist.id)}>X</button>

        //         </div>;

        // });

            return (

            <div> 
             <input placeholder={"Nome da Playlist"}
                    value={this.state.inputNome}
                    onChange={this.onChangeInputNome}
             /> 
             
             
             
             <button onClick={this.criarPlaylist}>Criar Playlist</button>     
                
                
            </div>

        )


    }

}