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
            <Link to={"/"} className="link" href="/">
              Сериалы
            </Link>
            <Link to={"/"} className="link" href="/">
              Топ 100
            </Link>
            <Link to={"/"} className="link" href="/">
              Новинки
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
