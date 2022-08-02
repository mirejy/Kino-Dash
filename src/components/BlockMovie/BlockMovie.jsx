import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/CSS/BlockMovie.css";

function BlockMovie() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json");
        const date = await response.json();
        const movie = date.data.movies;
        setLoading(false);
        setPost(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="BlockMovie">
      <div className="BlockMovieWrapper">
        <p>{loading && "Загрузка"}</p>
        {post.map((item) => (
          <Link
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
            <div key={item.id}>
              <img
                src={item.medium_cover_image}
                alt="sorry we don't have photo"
              ></img>
              <h1>{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlockMovie;
