import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToMovieDetails } from '../../routes/coordinator'



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
            <div key={movie.id}>

                <img src={urlImage + movie.poster_path} onClick={() => onClickCard(movie.id)} alt="poster do filme"/>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
            </div>
        )
    })


    return (
        <div>
            {feedMovies}
        </div>
    )
}



export default HomePage