import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { goToMovieDetails } from '../routes/coordinator'
import { CardEstilizado} from './styled'

const CardMovie = (props) => {
    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }

    const urlImage = "https://image.tmdb.org/t/p/w500"

    return (
        <CardEstilizado onClick={() => onClickCard(props.movie.id)} sx={{
            width: 300,
            maxWidth: 350
        }}>
            <CardMedia
                key={props.movie.id}
                component="img"
                height="500"
                image={urlImage + props.movie.poster_path}
                alt="movie"
            />
            <div>
                <Typography gutterBottom variant="h5" component="div">
                    {props.movie.title}
                </Typography>
                <Typography variant="body2">
                    {props.movie.release_date}
                </Typography>
            </div>

        </CardEstilizado>

    );

}

export default CardMovie