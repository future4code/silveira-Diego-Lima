import { useState, useEffect } from "react";
import { Router } from "./routes/Router";
import { theme } from "./theme"
// import { ThemeProvider } from '@material-ui/styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;}
`


function App() {
  return (
    <div>
    
      <GlobalStyle />
      <Router />
    
    </div>
  );
}



export default App;
