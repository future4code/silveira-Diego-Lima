import { GlobalStateContext } from './GlobalStateContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../constants/urls"

export default function GlobalState(props) {
    const [moviePopularList, setMoviePopularList] = useState([])


    const params = {
        params: {
            api_key: 'c3fedfe220200db64b12b268d8e63d51'
        }
    }
    const getMoviePopular = () => {

        axios.get(`${BASE_URL}/movie/popular?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR&page=1`)
            .then((response) => {
                setMoviePopularList(response.data.results);
            }).catch((error) => console.log(error));

    };



    useEffect(() => {
        getMoviePopular();

    }, []);

    const data = {
        moviePopularList,
        setMoviePopularList

    };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )
}

