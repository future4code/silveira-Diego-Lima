import React from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hoocks/useRequestData"
import { BASE_URL } from "../../constants/urls"



const MovieDetails = () => {
    const params = useParams()
    const language = `&language=pt-PT`
    const [movieDetails, getMovieDetails] = useRequestData([], `${BASE_URL}/movie/${params.id}?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)

    const urlImage = "https://image.tmdb.org/t/p/w500"

    console.log(movieDetails)


    return (
        <div key={movieDetails.id}>
            <img src={urlImage + movieDetails.poster_path} alt="poster do filme" />
            <p>{movieDetails.title}</p>
            <p></p>
            <p>{movieDetails.release_date}</p>
            {/* {movieDetails && movieDetails.genres.map((movie) => {
                return (
                    <span key={movie.name}>{movie.name}</span>
                )
            })} */}
            <p>{movieDetails.runtime} min</p>
            <p>{movieDetails.vote_average}</p>
            <h3>Sinopse</h3>
            <p>{movieDetails.overview}</p>

        </div>
    )
}

export default MovieDetails