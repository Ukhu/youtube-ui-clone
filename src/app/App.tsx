import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import Sidebar from "../components/Sidebar";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <HomeContent />
    </React.Fragment>
  );
}

export default App;
