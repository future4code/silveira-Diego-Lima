import React from "react";
import axios from "axios";
import {BASE_URL} from '../../constants/urls'

const headers = {
    headers 
}

export default class ListaPlaylist extends React.Component {
    state = {
        listas: []
    }



    getPlaylists = () => {
        axios.get({BASE_URL})


    }

    render(){ 
        return (

            <div>Lista</div>

        )


    }

}