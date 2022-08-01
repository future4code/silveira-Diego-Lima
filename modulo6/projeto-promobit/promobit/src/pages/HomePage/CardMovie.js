import React from 'react'
import { goToMovieDetails } from '../../Routes/coordinator'

const CardMovie = (props) => {
    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }

    return (
        <CardEstilizado onClick={() => onClickCard(props.item.id)} sx={{
            width: 300,
            maxWidth: 350
        }}>
            <CardMedia
                key={props.item.id}
                component="img"
                height="140"
                image={props.item.logoUrl}
                alt="restaurant"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.item.name}
                </Typography>
                <Typography variant="body2">
                    {props.item.description}
                </Typography>
            </CardContent>

            <DivFrete>
                <p>tempo de entrega {props.item.deliveryTime} minutos </p>
                <p>frete R${props.item.shipping}</p>
            </DivFrete>
        </CardEstilizado>


    );

}

export default CardMovie