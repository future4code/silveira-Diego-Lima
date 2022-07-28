import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hoocks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import axios from 'axios'



const MovieDetails = () => {
    const params = useParams()
    const [movieDetails, getMovieDetails] = useRequestData([], `${BASE_URL}/movie/${params.id}?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [credits, getCredits] = useRequestData([], `${BASE_URL}/movie/${params.id}/credits?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const urlImage = "https://image.tmdb.org/t/p/w300"



    console.log(credits.crew)

    const directorFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Director"
    })

    const director = directorFilter && directorFilter.map((movie) => {
        return (
            <div key={movie.id}><p>{movie.name}</p></div>
        )
    })
    const charactersFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Characters"
    })

    const characters = charactersFilter && charactersFilter.map((movie) => {
        return (
            <div key={movie.id}><p>{movie.name}</p></div>
        )
    })
    const screenPlayFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Writer"
    })

    const screenPlay = screenPlayFilter && screenPlayFilter.map((movie) => {
        return (
            <div key={movie.id}><p>{movie.name}</p></div>
        )
    })

    console.log(screenPlayFilter)

    return (

        <div key={movieDetails.id}>
            <img src={urlImage + movieDetails.poster_path} alt="poster do filme" />
            <p>{movieDetails.title}</p>
            <p></p>
            <p>{movieDetails.release_date}</p>
            {/* {movieDetails && movieDetails.genres.map((movie) => {
                return (
                    <div key={movie.name}><p>{movie.name}</p></div>
                )
            })} */}
            <p>{movieDetails.runtime} min</p>
            <p>{movieDetails.vote_average}</p>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>
            <div>
                Director:{director}
                Screenplay:{screenPlay}
                Characters:{characters}
            </div>





        </div>
    )
}

export default MovieDetails