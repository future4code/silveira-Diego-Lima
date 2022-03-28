import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h3`
    padding-top: 10px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: flex-start;
    
`
const Pergunta = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
`

class Etapa2 extends React.Component {
    state = {
        curso: '',
        unidade: '',
    }

    onChangeCurso = (event) => {
        this.setState({ curso: event.target.value })
    }

    onChangeUnidade = (event) => {
        this.setState({ unidade: event.target.value })
    }


    render() {
        return (

            <Container>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <Pergunta>
                    <p> 5. Qual curso?</p>
                </Pergunta>
                <input onChange={this.onChangeCurso} placeholder='' value={this.state.curso} />

                <Pergunta>
                    <p> 6. Qual a unidade de ensino?</p>
                </Pergunta>

                <input onChange={this.onChangeUnidade} placeholder='' value={this.state.unidade} />


            </Container>

        );
    }
}

export default Etapa2;
