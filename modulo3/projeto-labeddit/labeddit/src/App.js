import React from "react";
import { GlobalStyle } from "./global/GlobalStyled";

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
