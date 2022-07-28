import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CardMovie from '../../components/CardMovie'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToMovieDetails } from '../../routes/coordinator'
import { ContainerCardMovies, Header } from './styled'



const HomePage = () => {
    const { moviePopularList } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    console.log(moviePopularList)
    const urlImage = "https://image.tmdb.org/t/p/w500"


    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }

    const feedMovies = moviePopularList && moviePopularList.map((movie) => {
        return (
            <CardMovie key={movie.id}>

                <img src={urlImage + movie.poster_path} onClick={() => onClickCard(movie.id)} alt="poster do filme"/>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
            </CardMovie>
        )
    })


    return (
        <div>
            <Header>

            </Header>
            <ContainerCardMovies>
            {feedMovies}
            </ContainerCardMovies>
            
        </div>
    )
}



export default HomePage