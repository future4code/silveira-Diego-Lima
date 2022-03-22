import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 175px;
    margin-bottom: 20px;
    height: 80px;
`
const SmallDiv = styled.div`
    display: flex;
    flex-direction:row;
    justify-items: flex-start;
`
const ImagemSmall = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;    
`
const Titulo = styled.h4`
    margin-bottom: 5px;
    padding-right: 15px;
`

function CardPequeno(props){
    return (
        <SmallCard>
            <ImagemSmall src={ props.imagem } />
            <SmallDiv>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </SmallDiv>
        </SmallCard>
    )

}
export default CardPequeno;