import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CardMovie from '../../components/CardMovie'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToMovieDetails } from '../../routes/coordinator'
import { ContainerCardMovies, Header, Titulo } from './styled'



const HomePage = () => {
    const { moviePopularList } = useContext(GlobalStateContext)
    const navigate = useNavigate()

    console.log(moviePopularList)



    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }

    const feedMovies = moviePopularList && moviePopularList.map((movie) => {
        return (
            <CardMovie key={movie.id}
                movie={movie}
            />
        )
    })


    return (
        <div>
            <Header>
                <Titulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Titulo>
            </Header>
            <ContainerCardMovies>
                {feedMovies}
            </ContainerCardMovies>

        </div>
    )
}



export default HomePage