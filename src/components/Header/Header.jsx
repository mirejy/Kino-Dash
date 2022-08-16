import React, { useState, useEffect } from "react";
import "../../style/CSS/Header.css";
import imgLogo from "../../images/images.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllMovies } from "../../redux/servises/getAllMovies";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import burger from "../../images/burgerPopUp.png";

function Header() {
  const [popUp, setPopUp] = useState();
  const [activeModal, setModalActive] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    getAllMovies({ dispatch });
  });

  const found = movies.filter((element) =>
    element.title.toLowerCase().includes(name.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Заполните поля ввода");
    } else {
      navigate("/SearchMovie", { state: name });
      setName("");
    }
  };

  const HandlerChange = (e) => {
    setName(e);
    console.log(found, name === "");
    setPopUp(
      name === ""
        ? ""
        : found.map((item) => (
            <Link
              key={item.id}
              to="/movie"
              state={{
                title: item.title,
                genres: item.genres,
                year: item.year,
                runtime: item.runtime,
                description_full: item.description_full,
                medium_cover_image: item.medium_cover_image,
                rating: item.rating,
                torrents: item.torrents[0].url,
                url: item.url,
              }}
            >
              <div className="PopUpInput">
                <div className="PopUpWrappere">{item ? item.title : false}</div>
              </div>
            </Link>
          ))
    );
  };

  return (
    <div className="Header">
      <header className="HeaderWrapper">
        <div className="HeaderLogo">
          <img className="LogoImg" src={imgLogo} alt="sorry" />
          <Link to="/">
            <h1 className="Logo">KinoDash</h1>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="inputSearch"
            type="text"
            value={name}
            onChange={(e) => HandlerChange(e.target.value)}
          />
          <input className="buttonSubmit" type="submit" />
          {popUp}
        </form>
        <Navigation active={activeModal} setActive={setModalActive} />
        <button className="butPopUp" onClick={() => setModalActive(true)}>
          <img src={burger} className="burgerImg" alt="sorry" />
        </button>
      </header>
    </div>
  );
}

export default Header;
