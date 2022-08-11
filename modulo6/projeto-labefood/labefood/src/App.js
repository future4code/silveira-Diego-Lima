import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./Constants/theme";
import GlobalState from "./Global/GlobalState";
import Router from "./Routes/Router";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
