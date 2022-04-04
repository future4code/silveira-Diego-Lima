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
class Etapa1 extends React.Component {
    state = {
        nome: '',
        idade: '',
        email: '',
        escolaridade: ''
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeIdade = (event) => {
        this.setState({ idade: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    onChangeEscolaridade = (event) => {
        this.setState({ escolaridade: event.target.value })

    }


    render() {
        return (

            <Container>
                <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                <Pergunta>
                    <p> 1. Qual o seu nome?</p>
                </Pergunta>
                <input onChange={this.onChangeNome} placeholder='' value={this.state.nome} />
                <Pergunta>
                    <p> 2. Qual sua idade?</p>
                </Pergunta>
                <input onChange={this.onChangeIdade} placeholder='' value={this.state.idade} />

                <Pergunta>
                    <p> 3. Qual seu email?</p>
                </Pergunta>
                <input onChange={this.onChangeEmail} placeholder='' value={this.state.email} />

                <Pergunta>
                    <p> 4. Qual a sua escolaridade?</p>
                    
                </Pergunta>
                <select name='escolaridade'>
                    <option value="1">Ensino médio incompleto</option>
                    <option value="2">Ensino médio completo</option>
                    <option value="3">Ensino superior incompleto</option>
                    <option value="4">Ensino superior completo</option>
                </select>

            </Container>




        );
    }
}

export default Etapa1;
