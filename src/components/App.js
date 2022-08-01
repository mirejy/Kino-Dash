import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../pages/MoviePage";
import MainPage from "../pages/MainPage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
