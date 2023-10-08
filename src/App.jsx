import { useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
