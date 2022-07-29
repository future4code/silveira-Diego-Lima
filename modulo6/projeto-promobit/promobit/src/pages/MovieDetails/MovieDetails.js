import React from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hoocks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { CardMedia, Typography } from '@mui/material'
import { CardContainer, CardDetails, CardImg, Trailer } from './styled'



const MovieDetails = () => {
    const params = useParams()
    const [movieDetails, getMovieDetails] = useRequestData([], `${BASE_URL}/movie/${params.id}?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [credits, getCredits] = useRequestData([], `${BASE_URL}/movie/${params.id}/credits?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [videos, getVideos] = useRequestData([], `${BASE_URL}/movie/${params.id}/videos?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [recommendations, getRecommendations] = useRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const urlImage = "https://image.tmdb.org/t/p/w500"
    const urlYT = "https://www.youtube.com/watch?v="



    console.log(recommendations)
    const directorFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Director"
    })

    const director = directorFilter && directorFilter.map((movie) => {
        return (
            <Typography>
                {movie.name}
                Director
            </Typography>
        )
    })

    const charactersFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Characters"
    })

    const characters = charactersFilter && charactersFilter.map((movie) => {
        return (
            <Typography>
                {movie.name}
                Characters
            </Typography>
        )
    })

    const screenPlayFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Writer"
    })

    const screenPlay = screenPlayFilter && screenPlayFilter.map((movie) => {
        return (
            <Typography gutterBottom variant="h6" component="div">
                {movie.name}
                Screenplay
            </Typography>
        )
    })
    const MovieGenres = movieDetails.genres && movieDetails.genres.map((movie) => {
        return (
            < Typography variant="body2">
                {movie.name}
            </Typography>)
    })

    const CastMovie = credits.cast && credits.cast.map((actor) => {
        return (
            <CardContainer key={actor.id}>
                <CardImg
                    src={urlImage + actor.profile_path}
                    alt="actor"
                />
                <strong>{actor.original_name}</strong>
                <p>{actor.character}</p>
            </CardContainer >

        )
    })

    const trailerFilter = videos.results && videos.results.filter((trailer) => {
        return trailer.name === "Trailer Oficial Dublado"
    })
    const CardTrailer = trailerFilter && trailerFilter.map((trailer) => {
        return (
            <div key={trailer.id}>
                <iframe src={urlYT + trailer.key} />

            </div>
        )
    })

    const RecommendationsCard = recommendations.results && recommendations.results.map((recommendations) => {
        return (
            <CardContainer key={recommendations.id}>
                <CardImg
                    src={urlImage + recommendations.poster_path}
                    alt="recommendations"
                />
                <strong>{recommendations.title}</strong>
                <p>{recommendations.release_date}</p>
            </CardContainer>


        )
    })
    RecommendationsCard.lenght



    return (
        <div>
            <CardDetails>
                <CardMedia
                    key={movieDetails.id}
                    component="img"
                    height="400"
                    image={urlImage + movieDetails.poster_path}
                    alt="movie"
                />
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieDetails.title}
                    </Typography>
                    <Typography variant="body2">
                        {movieDetails.release_date}(BR){MovieGenres}{movieDetails.runtime} min
                    </Typography>
                    <div>
                        {movieDetails.vote_average}
                    </div>
                    <h3>Sinopse</h3>
                    <Typography variant="body2">
                        {movieDetails.overview}
                    </Typography>
                    {director}
                    {characters}
                    {screenPlay}
                </div>

            </CardDetails>
            <div>
                <h3>Elenco Original </h3>
                {CastMovie}
            </div>
            <div>
                <h3>Trailer </h3>
                {CardTrailer}
            </div>
            <div>
                <h3>Recomendações </h3>
                {RecommendationsCard}

            </div>
        </div>
    )
}

export default MovieDetails