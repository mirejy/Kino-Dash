import React from "react";
import "./App.css";
import Header from "./Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../pages/MoviePage.jsx";
import MainPage from "../pages/MainPage.jsx";
import Footer from "./Footer/Footer.jsx";
import BestMovies from "../pages/BestMoviesPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/BestMovies" element={<BestMovies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
