import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/CSS/BlockMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/servises/getAllMovies";

export default function BestMovies() {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    getAllMovies({ dispatch });
    // setLoading(false);
  }, []);

  const finalmovies = movies.sort(function (a, b) {
    if (a.rating < b.rating) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="BlockMovie">
      <h1>Лучшее</h1>
      <div className="BlockMovieWrapper">
        {finalmovies.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
