import React from "react";
import "../../style/CSS/Header.css";
import img from "../../images/images.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="HeaderWrapper">
        <div className="HeaderLogo">
          <img className="LogoImg" src={img} alt="sorry" />
          <Link to="/">
            <h1 className="Logo">KinoDash</h1>
          </Link>
        </div>
        <div className="Re-link">
          <div className="Re-linkWrapper">
            <Link to="/movie" className="link">
              Сериалы
            </Link>
            <Link to="/movie" className="link" href="/">
              Топ 100
            </Link>
            <Link to="/movie" className="link" href="/">
              Новинки
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
