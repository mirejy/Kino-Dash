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
          <h1 className="Logo">KinoDash</h1>
        </div>
        <div className="Re-link">
          <div className="Re-linkWrapper">
            <a className="link" href="/">
              Сериалы
            </a>
            <a className="link" href="/">
              Топ 100
            </a>
            <a className="link" href="/">
              Новинки
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
