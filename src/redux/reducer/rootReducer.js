import { defaultState } from "../variables/varibles";
import { getAllMovies } from "../actions/actions";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case getAllMovies:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
