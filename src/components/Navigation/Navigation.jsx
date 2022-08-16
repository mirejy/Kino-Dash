import React from "react";
import "../../style/CSS/Navigation.css";
import { NavLink } from "react-router-dom";
import burger from "../../images/burgerPopUp.png";

export const Navigation = ({ active, setActive }) => {
  return (
    <div className="Navigation">
      <nav className={active === true ? "nav actives" : "nav"}>
        <div className="wrapperButton">
          <button className="butPopUp" onClick={() => setActive(false)}>
            <img src={burger} className="burgerImg" alt="sorry" />
          </button>
        </div>
        <NavLink to="/" exact="true">
          home
        </NavLink>
        <NavLink to="/BestMovies">Лучшее Фильмы</NavLink>
        <NavLink to="/Drama">Драмы</NavLink>
        <NavLink to="/Horor">Ужасы</NavLink>
        <NavLink to="/BestMovies">Коммедии</NavLink>
        <NavLink to="/BestMovies">Боивики</NavLink>
      </nav>
    </div>
  );
};
