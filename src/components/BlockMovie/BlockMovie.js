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
      // setPost(date);
    };

    fetchPost();
  }, []);

  return (
    <div className="BlockMovie">
      <div className="BlockMovieWrapper">
        <p>{loading && "Загрузка"}</p>
        {post.map((item) => (
          <Link
            to={{
              pathname: "/movie",
              state: "tdrue",
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
