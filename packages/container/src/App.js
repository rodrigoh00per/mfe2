import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });
const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
