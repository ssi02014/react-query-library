import React from "react";
import { AppContainer } from "./components/common";
import GlobalStyle from "./components/common/global";
import NavBar from "./components/organisms/NavBar";
import Router from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <NavBar />
        <Router />
      </AppContainer>
    </>
  );
}

export default App;
