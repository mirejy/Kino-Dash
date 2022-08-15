import React from "react";
import "../../style/CSS/Navigation.css";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <div className="Navigation">
      <nav>
        <NavLink to="/" exact>
          home
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Новинки
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Лучшее Фильмы
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Сериалы
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Ужасы
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Драмы
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Коммедии
        </NavLink>
        <NavLink to="/BestMovies" exact>
          Боивики
        </NavLink>
      </nav>
    </div>
  );
}
