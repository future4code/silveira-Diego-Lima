import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./Constants/theme";
import Router from "./Routes/Router";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
