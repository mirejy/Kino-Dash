import React from "react";
import "./App.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Slider from "./Slider/Slider.js";
import BlockMovie from "./BlockMovie/BlockMovie.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/">
            <NavBar />
            <Slider />
            <BlockMovie />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
