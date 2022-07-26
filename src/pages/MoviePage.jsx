import React from "react";
import "../style/CSS/MoviePage.css";

import { useLocation } from "react-router-dom";

function MoviePage() {
  const Location = useLocation();
  const DateLocation = Location.state;

  return (
    <div className="MoviePage">
      <div className="MoviePageWrapper">
        <div className="BlockDescriptionMovie">
          <div>
            <img
              className="imgMovie"
              src={DateLocation.medium_cover_image}
              alt="sorry"
            ></img>
            <h3>Рейтинг: {DateLocation.rating}</h3>
            <a href={DateLocation.torrents}>
              <button className="buttonDownload">Download</button>
            </a>
            <a href={DateLocation.url}>
              <button className="buttonLink">Watch now</button>
            </a>
          </div>
          <div className="BlockAboutMovie">
            <div className="AboutMovieWrapper">
              <div className="AboutMovie">
                <h3>Оригинальное название: {DateLocation.title}</h3>
                <h3>Жанр: {DateLocation.genres.join(", ")}</h3>
                <h3>Год: {DateLocation.year}</h3>
                <h3>Продолжительность: {DateLocation.runtime}мин</h3>
              </div>
              <div>
                <h3>{DateLocation.description_full.slice(0, 400)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
