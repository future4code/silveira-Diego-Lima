import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';

const ImagemDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ImagemDiv>
            <Imagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemDiv>

    )
}

export default ImagemButton;