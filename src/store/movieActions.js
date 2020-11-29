import {ADD_DISLIKE_MOVIE, ADD_LIKE_MOVIE, DELETE_MOVIE} from "./moviesReducer"
import {UPDATE_FILTER} from './moviesReducer'

export const addLikeMovie = (movie) => ({
    type: ADD_LIKE_MOVIE,
    payload: movie.id
})


export const addDislikeMovie = (movie) => ({
    type: ADD_DISLIKE_MOVIE,
    payload: movie.id
})

export const deleteMovie = (movie) => ({
    type: DELETE_MOVIE, 
    payload: movie.id
})


export const setFilterAction = (value) => ({
    type : UPDATE_FILTER, 
    payload : value
})
