

import { moviesReducer , filterReducer } from "./moviesReducer";
const { combineReducers,  createStore } = require("redux")

export default createStore(
  combineReducers({
    movies: moviesReducer,
    filter : filterReducer
  })
)