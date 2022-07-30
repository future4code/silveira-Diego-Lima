import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hoocks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { CardMedia, Typography } from '@mui/material'
import { CardContainer, CardDetails, CardImg, CardRecommendations, CastContainer, Footer, PercentageVote, Titulo, VoteContainer } from './styled'


const MovieDetails = () => {
    const params = useParams()
    const [movieDetails, getMovieDetails] = useRequestData([], `${BASE_URL}/movie/${params.id}?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [credits, getCredits] = useRequestData([], `${BASE_URL}/movie/${params.id}/credits?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [videos, getVideos] = useRequestData([], `${BASE_URL}/movie/${params.id}/videos?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [recommendations, getRecommendations] = useRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR&page=1`)
    const urlImage = "https://image.tmdb.org/t/p/w500"
    const urlYT = "https://www.youtube.com/embed/"


    

    
    const vote = Math.round(Number(movieDetails.vote_average)*10)
    
    const data = movieDetails.release_date
       
    
    
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
        return trailer.name === ("Trailer Dublado")
    })
    const CardTrailer = trailerFilter && trailerFilter.map((trailer) => {
        return (
            <div key={trailer.id}>
                <iframe width='1080' height='760' src={urlYT + trailer.key} />

            </div>
        )
    })
    console.log(CardTrailer)

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

    useEffect(() => {
        

    }, []);


    return (
        <div>
            <CardDetails>
                <CardMedia
                    key={movieDetails.id}
                    component="img"
                    height="500"
                    image={urlImage + movieDetails.poster_path}
                    alt="movie"
                />
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieDetails.title}
                    </Typography>
                    <Typography variant="body2">
                        {data}(BR){MovieGenres}{movieDetails.runtime} min
                    </Typography>
                    <VoteContainer>
                        <PercentageVote />
                        {vote} %
                    </VoteContainer>
                    <h3>Sinopse</h3>
                    <Typography variant="body2">
                        {movieDetails.overview}
                    </Typography>
                    {director}
                    {characters}
                    {screenPlay}
                </div>

            </CardDetails>
            <Titulo>Elenco Original </Titulo>
            <CastContainer>
                {CastMovie}
            </CastContainer>
            <div>
                <Titulo>Trailer </Titulo>
                {CardTrailer}
            </div>
            <Titulo>Recomendações </Titulo>
            <CardRecommendations>
                {RecommendationsCard}
            </CardRecommendations>
            <Footer />
        </div>
    )
}

export default MovieDetails