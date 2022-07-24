import React, { useEffect, useState } from "react";
import "../../style/CSS/BlockMovie.css";

const menu = [
  {
    img: "https://thumbs.dfs.ivi.ru/storage6/contents/8/f/fce0e054410756ae127920d2ebde1b.jpg",
    name: "Миньоны",
    year: "2002",
  },
  {
    img: "https://www.kino-teatr.ru/movie/poster/157446/136404.jpg",
    name: "The Reef",
    year: "2022",
  },
  {
    img: "https://thumbs.dfs.ivi.ru/storage32/contents/c/5/1f617622d090d6c7285443d7ce9c1c.jpg",
    name: "В тылу врага",
    year: "2014",
  },
  {
    img: "https://thumbs.dfs.ivi.ru/storage33/contents/9/2/a6257f5bf1ab19c04c94ac9b2f16d6.jpg/234x360/?q=60",
    name: "Кощей",
    year: "2010",
  },
  {
    img: "https://thumbs.dfs.ivi.ru/storage33/contents/9/2/a6257f5bf1ab19c04c94ac9b2f16d6.jpg/234x360/?q=60",
    name: "Кощей",
    year: "2010",
  },
  {
    img: "https://thumbs.dfs.ivi.ru/storage33/contents/9/2/a6257f5bf1ab19c04c94ac9b2f16d6.jpg/234x360/?q=60",
    name: "Кощей",
    year: "2010",
  },
  {
    img: "https://www.kino-teatr.ru/movie/poster/157446/136404.jpg",
    name: "The Reef",
    year: "2022",
  },
  {
    img: "https://thumbs.dfs.ivi.ru/storage32/contents/c/5/1f617622d090d6c7285443d7ce9c1c.jpg",
    name: "В тылу врага",
    year: "2014",
  },
];

function BlockMovie() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const date = await response.json();
        setPost(date);
        console.log(date);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchPost();
  }, []);

  return (
    <div className="BlockMovie">
      <div className="BlockMovieWrapper">
        <p>{loading && "Загрузка"}</p>
        {post.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.body}</h3>
          </div>
        ))}
        {menu.map((item, idx) => (
          <a href="/">
            <div key={idx}>
              <img src={item.img} alt="sorry"></img>
              <h1>{item.name}</h1>
              <h3>{item.year}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlockMovie;
