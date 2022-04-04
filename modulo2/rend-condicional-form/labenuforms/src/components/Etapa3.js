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


class Etapa3 extends React.Component {
    state = {
        pergunta1: '',
        pergunta2: '',
    }

    onChangePergunta1 = (event) => {
        this.setState({ pergunta1: event.target.value })
    }

    onChangePergunta2 = (event) => {
        this.setState({ pergunta2: event.target.value })
    }


    render() {
        return (

            <Container>
                <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                <Pergunta>
                    <p> 7. Por que você não terminou um curso de graduação?</p>
                </Pergunta>
               
                <input onChange={this.onChangeCurso} placeholder='' value={this.state.curso} />

                <Pergunta>
                    <p> 8. Você fez algum curso complementar</p>
                </Pergunta>
                <label></label>
                <select name='curso'>
                    <option value="1">Nenhum</option>
                    <option value="2">Curso técnico</option>
                    <option value="3">Curso de inglês</option>

                </select>


            </Container>

        );
    }
}

export default Etapa3;
