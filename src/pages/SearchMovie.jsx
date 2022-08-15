import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../style/CSS/BlockMovie.css";
import { getAllMovies } from "../redux/servises/getAllMovies";

export function SearchMovie() {
  const props = useLocation();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    getAllMovies({ dispatch });
  }, []);

  const found = movies.filter((element) =>
    element.title.toLowerCase().includes(props.state.toLowerCase())
  );

  console.log(found[0]);

  return (
    <div className="SearchMovie">
      <div className="SearchMovieWrapper">
        <div className="SearchWrapper">
          <div>
            <h1 className="titleSearch">{`поиск по запросу ${props.state}`}</h1>
            {found[0] ? (
              found.map((item) => (
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
                  <div>
                    <img
                      src={item.medium_cover_image}
                      alt="sorry we don't have"
                    ></img>
                    <h1>
                      {item.title.length > 15
                        ? `${item.title.slice(0, 15)}...`
                        : item.title}
                    </h1>
                  </div>
                </Link>
              ))
            ) : (
              <h1>
                К сожалению, поиск по сайту не дал никаких результатов.
                Попробуйте изменить или сократить Ваш запрос
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
