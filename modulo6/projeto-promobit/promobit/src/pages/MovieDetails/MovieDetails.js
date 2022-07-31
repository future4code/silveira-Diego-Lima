import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useRequestData from "../../hoocks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { Typography } from '@mui/material'
import { App, Card, CardContainer, CardCrew, CardDetails, CardImg, CardImgPoster, CardInfo,  CardRecommendations, CastContainer, ContainerCrew, ContainerInfo, ContainerVideo, Footer, Genres, Info, LogoContainer, PercentageVote, PosterContainer, TagLogo, Titulo, Video, VoteContainer } from './styled'
import Logo from "../../assests/tmdb.svg"
import { goBack } from '../../routes/coordinator'


const MovieDetails = () => {
    const params = useParams()
    const [movieDetails, getMovieDetails] = useRequestData([], `${BASE_URL}/movie/${params.id}?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [credits, getCredits] = useRequestData([], `${BASE_URL}/movie/${params.id}/credits?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [videos, getVideos] = useRequestData([], `${BASE_URL}/movie/${params.id}/videos?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR`)
    const [date, getDate] = useRequestData([], `${BASE_URL}/movie/${params.id}/release_dates?api_key=c3fedfe220200db64b12b268d8e63d51`)
    const [recommendations, getRecommendations] = useRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR&page=1`)
    const urlImage = "https://image.tmdb.org/t/p/w500"
    const urlYT = "https://www.youtube.com/embed/"


    const navigate = useNavigate()
    const onClickCard = () => {
        goBack(navigate)
    }

    const vote = Math.round(Number(movieDetails.vote_average) * 10)
    const data = `${movieDetails.release_date}`
    const alteracao = data.split("-").reverse().join("/")


    const resultado = date.results && date.results.filter((date) => {
        return date.iso_3166_1 === "BR"
    })


    const directorFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Director"
    })

    const director = directorFilter && directorFilter.map((movie) => {
        return (
            <CardCrew key={movie.id}>
                <strong>{movie.name}</strong>
                <p>Director</p>
            </CardCrew>
        )
    })

    const charactersFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Characters"
    })

    const characters = charactersFilter && charactersFilter.map((movie) => {
        return (
            <CardCrew key={movie.id}>
                <strong>{movie.name}</strong>
                <p>Characters</p>
            </CardCrew>
        )
    })

    const screenPlayFilter = credits.crew && credits.crew.filter((movie) => {
        return movie.name && movie.job === "Screenplay"
    })

    const screenPlay = screenPlayFilter && screenPlayFilter.map((movie) => {
        return (
            <CardCrew key={movie.id}>
                <strong>{movie.name}</strong>
                <p>Screenplay</p>
            </CardCrew>
        )
    })
    const MovieGenres = movieDetails.genres && movieDetails.genres.map((movie) => {
        return (
            <Genres key={movie.id}>{movie.name}</Genres>

        )
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
        return trailer.name.includes("Trailer") && trailer.name.includes("Dublado")
    })

    const CardTrailer = trailerFilter && trailerFilter.map((trailer) => {
        return (
            <div key={trailer.id}>
                <Video width='1080' height='760' src={urlYT + trailer.key} />

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


    return (
        <App>

            <LogoContainer>
                <TagLogo src={Logo} onClick={() => onClickCard()} />
            </LogoContainer>
            <Card>
                <CardDetails>
                    <PosterContainer>
                        <CardImgPoster
                            src={urlImage + movieDetails.poster_path}
                            alt="movie"
                        />
                    </PosterContainer>
                    <CardInfo>
                        <Typography gutterBottom variant="h5" component="div" >

                            {movieDetails.title}
                        </Typography>
                        <ContainerInfo>
                            <Info>{alteracao}(BR)</Info>
                            <Info>{MovieGenres}</Info>
                            <Info>{movieDetails.runtime} min </Info>
                        </ContainerInfo>
                        <VoteContainer>
                            <PercentageVote />
                            {vote} % Avaliação dos usuários
                        </VoteContainer>
                        <h3>Sinopse</h3>
                        <Typography variant="body2">
                            {movieDetails.overview}
                        </Typography>
                        <ContainerCrew>
                            {director}
                            {characters}
                            {screenPlay}
                        </ContainerCrew>

                    </CardInfo>


                </CardDetails>
            </Card>
            <Titulo>Elenco Original </Titulo>
            <CastContainer>
                {CastMovie}
            </CastContainer>
            <Titulo>Trailer </Titulo>
            <ContainerVideo>
                {CardTrailer}
            </ContainerVideo>


            <Titulo>Recomendações </Titulo>
            <CardRecommendations>
                {RecommendationsCard}
            </CardRecommendations>
            <Footer />
        </App>
    )
}

export default MovieDetails