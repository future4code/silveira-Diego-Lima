import React, { useState } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import CardMatch from "./components/CardMatch/CardMatch";
import ListMatch from "./components/ListMatch/ListMatch";

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
       	
	}
`

const App = () => {
  const [paginaAtual, SetPaginaAtual] = useState("CardMacth")


  const trocarTela = () => {
    switch (paginaAtual) {
      case "CardMacth":
        return <CardMatch  goToListMatch={goToListMatch}/>
      case "ListMatch":
        return <ListMatch goToCardMatch={goToCardMatch}  />
      default:
        return <CardMatch goToListMatch={goToListMatch}/>
    }
  }


  const goToCardMatch = () => {
    SetPaginaAtual("CardMacth")
  }
  const goToListMatch = () => {
    SetPaginaAtual("ListMatch")

  }


  return (

    <div >
      <GlobalStyle />
      {trocarTela()}
    </div>
  );
}

export default App;
