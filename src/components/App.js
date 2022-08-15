import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../pages/MoviePage.jsx";
import MainPage from "../pages/MainPage.jsx";
import Footer from "./Footer/Footer.jsx";
import BestMovies from "../pages/BestMoviesPage.jsx";
import { SearchMovie } from "../pages/SearchMovie.jsx";
import { Navigation } from "../components/Navigation/Navigation.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/BestMovies" element={<BestMovies />} />
          <Route path="/SearchMovie" element={<SearchMovie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
