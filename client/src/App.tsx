import axios from "axios";
import React, { useEffect } from "react";
import SelectBox from "./components/atoms/SelectBox";
import { AppContainer } from "./components/common";
import GlobalStyle from "./components/common/global";
import NavBar from "./components/organisms/NavBar";
import Router from "./pages";
import request from "./utils/axios";

function App() {
  const fetchData = async () => {
    const response = await request("/books");
    return response;
  };

  const example = () => {
    const data = fetchData();
    console.log("data", data);
    console.log("etc");
  };

  useEffect(() => {
    example();
  }, []);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <NavBar />
        <Router />
      </AppContainer>
      <div style={{ height: "100px" }}></div>
      <SelectBox />
    </>
  );
}

export default App;
