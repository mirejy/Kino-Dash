import { createStore } from "redux";
import { reducer } from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());
