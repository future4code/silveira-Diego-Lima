import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./constants/theme";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      TESTE
    </ThemeProvider>
  );
}

export default App;
