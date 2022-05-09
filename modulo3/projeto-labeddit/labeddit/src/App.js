import React from "react";
import { GlobalStyle } from "./pages/LoginPage/styled";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
