import React, { useState } from "react";
import "../../style/CSS/Header.css";
import img from "../../images/images.png";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux/es/exports";

function Header() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  // const dispatch = useDispatch();
  // const cash = useSelector((state) => state.cash);
  // console.log(cash);

  return (
    <div className="Header">
      <header className="HeaderWrapper">
        <div className="HeaderLogo">
          <img className="LogoImg" src={img} alt="sorry" />
          <Link to="/">
            <h1 className="Logo">KinoDash</h1>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </form>
        <div className="Re-link">
          <div className="Re-linkWrapper">
            <Link to="/movie" className="link">
              Сериалы
            </Link>
            <Link to="/BestMovies" className="link" href="/">
              Лучшее
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
