import {FETCH_MOVIES, FETCH_MOVIE, LOADING, CLEAR_MOVIES} from './types';
import axios from 'axios';
import {APIKey} from '../APIKey';

export const fetchMovies = (text) => async dispatch => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        dispatch({
            type: FETCH_MOVIES,
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
};

export const fetchMovie = (id) => async dispatch => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
        dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        })
    } catch (err) {
        console.log(err)
    }
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const clearMovies = () => {
    return {
        type: CLEAR_MOVIES
    };
};