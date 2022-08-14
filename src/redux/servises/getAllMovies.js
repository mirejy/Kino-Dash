import { getAllMovies as getAllMoviesAction } from "../actions/actions";

export function getAllMovies({ dispatch }) {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => response.json())
    .then((result) => {
      dispatch({ type: getAllMoviesAction, payload: result.data.movies });
    });
}
