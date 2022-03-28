import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: flex-start;
    
`
const Titulo = styled.h3`
    padding-top: 10px;
`

function Final() {
  return (
    <Container>
      <Titulo>O FORMULÁRIO ACABOU</Titulo>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Container>
  );
}






export default Final;