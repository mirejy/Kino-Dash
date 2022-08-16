import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../pages/MoviePage.jsx";
import MainPage from "../pages/MainPage.jsx";
import Footer from "./Footer/Footer.jsx";
import BestMovies from "../pages/BestMoviesPage.jsx";
import Drama from "../pages/Drama.jsx";
import HororPage from "../pages/HororPage.jsx";
import { SearchMovie } from "../pages/SearchMovie.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/BestMovies" element={<BestMovies />} />
          <Route path="/Drama" element={<Drama />} />
          <Route path="/Horor" element={<HororPage />} />
          <Route path="/SearchMovie" element={<SearchMovie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
